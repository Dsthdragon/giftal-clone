import uuid

from flask import jsonify, make_response

from app.api import bp, login_required

from app.schemas import *

from app import db

import re

from app.utils import save_image, delete_file
from config import Config


@bp.route('/logout')
@login_required()
def logout_user():
    resp = make_response(jsonify(status="success", message="Logout Successful!"))
    resp.set_cookie('auth', '')
    return resp


@bp.route("/login", methods=['post'])
def login():
    data = request.get_json()

    if data is None:
        return jsonify(status="failed", message="No Data Sent!")
    if not data.get("email"):
        return jsonify(status="failed", message="Email Address required!")
    if not re.search(Config.EMAIL_REGEX, data.get("email")):
        return jsonify(status="failed", message="Invalid Email Address!")
    if not data.get("password"):
        return jsonify(status="failed", message="Password required!")
    if not data.get("type"):
        return jsonify(status="failed", message="Select Account Type!")

    if data['type'] == 'admin':
        account = Admin.query.filter_by(email=data["email"].lower()).first()
    elif data['type'] == 'client':
        account = Client.query.filter_by(email=data["email"].lower()).first()
    elif data['type'] == 'vendor':
        account = Vendor.query.filter_by(email=data["email"].lower()).first()

    if not account or not account.check_password(data.get("password")):
        return jsonify(status="failed", message="Invalid Login Details!")
    if data['type'] == 'client' and ( not account.last_login or account.last_login.date() != datetime.today()):
        setting = Setting.query.first()
        account.last_login = datetime.now()
        account.royalty_wallet += setting.login_bonus
        db.session.commit()

    resp = make_response(jsonify(status="success", message="Login Successful!"))
    resp.set_cookie('auth', account.user.generate_token(not data.get("remember")))
    return resp


@bp.route("/setting")
def get_setting():
    setting = Setting.query.first()
    return jsonify(
        status='success',
        message='Setting Found',
        data=SettingSchema().dump(setting)
    )


@bp.route("/user/<int:user_id>")
@login_required(role='Admin')
def toggle_block(user_id):
    current = User.current()
    user = User.query.get(user_id)
    if not user:
        return jsonify(status="failed", message="User Not Found!")

    if current.id == user.id:
        return jsonify(status="failed", message="Cant Update Your Own Account!")

    user.blocked = not user.blocked
    db.session.commit()
    data = {}
    if user.client:
        data = ClientSchema().dump(user.client)
    elif user.admin:
        data = AdminSchema().dump(user.admin)
    elif user.vendor:
        data = VendorSchema().dump(user.vendor)
    return jsonify(
        status="success",
        message="User data Updated",
        data=data
    )


@bp.route("/setting", methods=['PUT'])
@login_required(role='admin')
def update_setting():
    setting = Setting.query.first()
    if not setting:
        setting = Setting()
        db.session.add(setting)
        db.session.commit()

    data = request.get_json()

    setting.comment = data.get("comment") or setting.comment
    setting.login_bonus = data.get("login_bonus") or setting.login_bonus
    setting.max_withdrawal_limit = data.get("max_withdrawal_limit") or setting.max_withdrawal_limit
    setting.min_withdrawal_limit = data.get("min_withdrawal_limit") or setting.min_withdrawal_limit
    setting.read_news = data.get("read_news") or setting.read_news
    setting.referral_bonus = data.get("referral_bonus") or setting.referral_bonus
    setting.share_daily_advert = data.get("share_daily_advert") or setting.share_daily_advert
    setting.share_daily_sponsored = data.get("share_daily_sponsored") or setting.share_daily_sponsored
    setting.share_news = data.get("share_news") or setting.share_news
    setting.sign_up_bonus = data.get("sign_up_bonus") or setting.sign_up_bonus
    setting.sign_up_fee = data.get("sign_up_fee") or setting.sign_up_fee
    setting.point_rate = data.get("point_rate") or setting.point_rate
    setting.testimonies_bonus = data.get("testimonies_bonus") or setting.testimonies_bonus

    db.session.commit()
    return jsonify(
        status="success",
        message="Settings Updated",
        data=SettingSchema().dump(setting)
    )


@bp.route("/request/referral", methods=["POST"])
@login_required(role='client')
def referral_request():
    data = request.get_json()
    if not data.get('amount'):
        return jsonify(status="failed", message="Amount Required!")
    amount = int(data.get('amount'))
    client = User.current().client
    setting = Setting.query.first()

    if client.referral_wallet < amount:
        return jsonify(status="failed", message="Amount Exceed Wallets Funds!")
    if amount < setting.min_withdrawal_limit:
        return jsonify(status="failed", message="Amount Below Minimum Withdrawal Limit !")
    if amount > setting.max_withdrawal_limit:
        return jsonify(status="failed", message="Amount Exceed Maximum Withdrawal Limit !")
    current_request = ClientRequest.query.filter_by(client_id=client.id, confirmed=False).first()
    if current_request:
        return jsonify(status="failed", message="Already Have an Active Request")

    client_request = ClientRequest()
    client_request.client_id = client.id
    client_request.type = 'referral'
    client_request.amount = amount

    client.referral_wallet -= amount
    db.session.add(client_request)
    db.session.commit()

    return jsonify(
        status="success",
        message="Referral Cash Out Request",
        data=ClientRequestSchema().dump(client_request)
    )


@bp.route("/request/royalty", methods=["POST"])
@login_required(role='client')
def royalty_request():
    data = request.get_json()
    if not data.get('amount'):
        return jsonify(status="failed", message="Amount Required!")
    amount = int(data.get('amount'))
    client = User.current().client
    setting = Setting.query.first()
    cash_value = amount / setting.point_rate

    if client.royalty_wallet < amount:
        return jsonify(status="failed", message="Amount Exceed Wallets Funds!")
    if cash_value < setting.min_withdrawal_limit:
        return jsonify(status="failed", message="Amount Below Minimum Withdrawal Limit !")
    if cash_value > setting.max_withdrawal_limit:
        return jsonify(status="failed", message="Amount Exceed Maximum Withdrawal Limit !")
    current_request = ClientRequest.query.filter_by(client_id=client.id, confirmed=False).first()
    if current_request:
        return jsonify(status="failed", message="Already Have an Active Request")

    client_request = ClientRequest()
    client_request.client_id = client.id
    client_request.type = 'royalty'
    client_request.amount = cash_value

    client.royalty_wallet -= amount
    db.session.add(client_request)
    db.session.commit()

    return jsonify(
        status="success",
        message="Referral Cash Out Request",
        data=ClientRequestSchema().dump(client_request)
    )


@bp.route("/request")
@login_required()
def get_requests():
    client_requests = ClientRequest.query.order_by(ClientRequest.created.desc()).all()
    return jsonify(
        status="success",
        message="Client Request Found",
        data=ClientRequestSchema(many=True).dump(client_requests)
    )


@bp.route("/client/<int:client_id>/request")
@login_required()
def get_client_requests(client_id):
    client_requests = ClientRequest.query.filter_by(client_id=client_id).order_by(ClientRequest.created.desc()).all()
    return jsonify(
        status="success",
        message="Client Request Found",
        data=ClientRequestSchema(many=True).dump(client_requests)
    )


@bp.route("/request/confirmed")
@login_required()
def get_confirmed_requests():
    client_requests = ClientRequest.query.filter_by(confirmed=True).order_by(ClientRequest.created.desc()).all()
    return jsonify(
        status="success",
        message="Client Request Found",
        data=ClientRequestSchema(many=True).dump(client_requests)
    )


@bp.route("/request/unconfirmed")
@login_required()
def get_unconfirmed_requests():
    client_requests = ClientRequest.query.filter_by(paid=False).all()
    return jsonify(
        status="success",
        message="Client Request Found",
        data=ClientRequestSchema(many=True).dump(client_requests)
    )


@bp.route("/request/<int:request_id>/paid")
@login_required(role='admin')
def made_payment_for_request(request_id):
    client_request = ClientRequest.query.get(request_id)
    if not client_request:
        return jsonify(
            status='failed',
            message='Request Not Found'
        )
    client_request.paid = True
    db.session.commit()
    return jsonify(
        status="success",
        message="Client Request Paid",
        data=ClientRequestSchema().dump(client_request)
    )


@bp.route("/request/<int:request_id>/confirm")
@login_required(role='client')
def confirm_request(request_id):
    client_request = ClientRequest.query.get(request_id)
    if not client_request:
        return jsonify(
            status='failed',
            message='Request Not Found'
        )
    client = User.current().client
    if client.id != client_request.client_id:
        return jsonify(
            status='failed',
            message='Request does not belong to you'
        )
    settings = Setting.query.first()
    client_request.confirmed = True
    client.royalty_wallet += settings.testimonies_bonus
    db.session.commit()
    return jsonify(
        status="success",
        message="Client Request Confirmed",
        data=ClientRequestSchema().dump(client_request)
    )


@bp.route("/admin", methods=["POST"])
@login_required(role='admin')
def create_admin():
    data = request.get_json()

    if data is None:
        return jsonify(status="failed", message="No Data Sent!")
    if not data.get("email"):
        return jsonify(status="failed", message="Email Address required!")
    if not re.search(Config.EMAIL_REGEX, data.get("email")):
        return jsonify(status="failed", message="Invalid Email Address!")
    if not data.get("last_name"):
        return jsonify(status="failed", message="Last Name required!")
    if not data.get("first_name"):
        return jsonify(status="failed", message="First Name required!")
    if not data.get("password"):
        return jsonify(status="failed", message="Password required!")

    admin = Admin.query.filter_by(email=data["email"].lower()).first()
    if admin:
        return jsonify(status="failed", message="Email Address already in system!")

    user = User()
    user.active = True
    admin = Admin()

    admin.email = data.get("email").lower()
    admin.user = user
    admin.first_name = data.get("first_name")
    admin.last_name = data.get("last_name")
    admin.phone = data.get("phone")

    admin.set_password(data.get("password"))

    db.session.add(user)
    db.session.add(admin)
    db.session.commit()
    return jsonify(status="success", message="Admin Created SuccessFul", data=AdminSchema().dump(admin))


@bp.route("/admin/<int:admin_id>/password", methods=["PUT"])
@login_required(role='admin')
def update_password_admin(admin_id):
    data = request.get_json()

    if data is None:
        return jsonify(status="failed", message="No Data Sent!")
    if not data.get("password"):
        return jsonify(status="failed", message="Last Name required!")
    if not data.get("new_password"):
        return jsonify(status="failed", message="First Name required!")
    if not data.get("confirm_password"):
        return jsonify(status="failed", message="First Name required!")
    if data.get("confirm_password") != data.get("new_password"):
        return jsonify(status="failed", message="First Name required!")

    admin = Admin.query.get(admin_id)
    if not admin:
        return jsonify(status="failed", message="Admin Not Found")

    admin.set_password(data.get("new_password"))

    db.session.commit()

    return jsonify(
        status="success",
        message="Admin Password Updated",
        data=AdminSchema().dump(admin)
    )


@bp.route("/admin/<int:admin_id>", methods=["PUT"])
@login_required(role='admin')
def update_admin(admin_id):
    data = request.get_json()

    if data is None:
        return jsonify(status="failed", message="No Data Sent!")
    if not data.get("last_name"):
        return jsonify(status="failed", message="Last Name required!")
    if not data.get("first_name"):
        return jsonify(status="failed", message="First Name required!")

    admin = Admin.query.get(admin_id)
    if not admin:
        return jsonify(status="failed", message="Admin Not Found")

    admin.first_name = data.get("first_name")
    admin.last_name = data.get("last_name")
    admin.phone = data.get("phone")

    db.session.commit()

    return jsonify(
        status="success",
        message="Admin Updated SuccessFul",
        data=AdminSchema().dump(admin)
    )


@bp.route("/admin")
@login_required(role='admin')
def get_admins():
    admins = Admin.query.order_by(Admin.created.desc()).all()
    return jsonify(
        status="success",
        message="Administrators Found",
        data=AdminSchema(many=True).dump(admins)
    )


@bp.route("/admin/<int:admin_id>")
@login_required(role='admin')
def get_admin(admin_id):
    admin = Admin.query.get(admin_id)
    if not admin:
        return jsonify(
            status="failed",
            message="Administrator Not Found",
        )
    return jsonify(
        status="success",
        message="Administrator Found",
        data=AdminSchema().dump(admin)
    )


@bp.route('/admin/<int:admin_id>/image', methods=['PUT'])
@login_required(role="admin")
def upload_admin_avatar(admin_id):
    data = request.get_json()
    if not data:
        return jsonify(status="failed", message="No Data Sent!")
    if not data.get('type'):
        return jsonify(status="failed", message="Image type required!")
    if not data.get('img'):
        return jsonify(status="failed", message="Image data not sent!")
    if data.get('type').lower() not in Config.ALLOWED_EXTENSIONS:
        return jsonify(status="failed", message="Extension not supported!")

    admin = Admin.query.get(admin_id)
    if not admin:
        return jsonify(status='failed', message='Admin Not Found')

    unique_filename = str(uuid.uuid4()) + '.' + data['type'].lower()
    if admin.img:
        delete_file(admin.img, Config.AVATAR_UPLOAD_FOLDER)

    save_image(
        unique_filename,
        data['img'],
        Config.AVATAR_UPLOAD_FOLDER,
        Config.AVATAR_SIZE, True
    )
    admin.img = unique_filename

    db.session.commit()

    return jsonify(
        status='success',
        message='Admin Avatar Upload',
        data=AdminSchema().dump(admin)
    )


@bp.route("/auth")
@login_required()
def auth_user():
    return jsonify(
        status="success",
        message="Logged In",
        data=UserSchema().dump(User.current())
    )


@bp.route("/admin_role", methods=["POST"])
@login_required(role='admin')
def create_admin_role():
    data = request.get_json()

    if data is None:
        return jsonify(status="failed", message="No Data Sent!")
    if not data.get("title"):
        return jsonify(status="failed", message="Title required!")

    admin_role = AdminRole.query.filter_by(title=data["title"]).first()
    if admin_role:
        return jsonify(status="failed", message="Role already in system!")

    admin_role = AdminRole()
    admin_role.title = data.get("title")
    admin_role.description = data.get("description")

    db.session.add(admin_role)
    db.session.commit()

    return jsonify(status="success", message="Admin Created SuccessFul", data=AdminRoleSchema().dump(admin_role))


@bp.route("/admin_role")
@login_required(role='admin')
def get_admin_roles():
    admin_roles = AdminRole.query.order_by(AdminRole.created.desc()).all()
    return jsonify(
        status="success",
        message="Administrator Roles Found",
        data=AdminRoleSchema(many=True).dump(admin_roles)
    )


@bp.route("/admin_role/<int:admin_role_id>")
@login_required(role='admin')
def get_admin_role(admin_role_id):
    admin_role = AdminRole.query.get(admin_role_id)
    if not admin_role:
        return jsonify(
            status="failed",
            message="Administrator Role Not Found",
        )
    return jsonify(
        status="success",
        message="Administrator Role Found",
        data=AdminRoleSchema(many=True).dump(admin_role)
    )


@bp.route("/vendor", methods=["POST"])
@login_required(role='admin')
def create_vendor():
    data = request.get_json()

    if data is None:
        return jsonify(status="failed", message="No Data Sent!")
    if not data.get("email"):
        return jsonify(status="failed", message="Email Address required!")
    if not re.search(Config.EMAIL_REGEX, data.get("email")):
        return jsonify(status="failed", message="Invalid Email Address!")
    if not data.get("last_name"):
        return jsonify(status="failed", message="Last Name required!")
    if not data.get("first_name"):
        return jsonify(status="failed", message="First Name required!")
    if not data.get("password"):
        return jsonify(status="failed", message="Password required!")

    vendor = Vendor.query.filter_by(email=data["email"].lower()).first()
    if vendor:
        return jsonify(status="failed", message="Email Address already in system!")

    user = User()
    user.active = True
    vendor = Vendor()

    vendor.email = data.get("email").lower()
    vendor.user = user
    vendor.first_name = data.get("first_name")
    vendor.last_name = data.get("last_name")
    vendor.phone = data.get("phone")

    vendor.set_password(data.get("password"))

    db.session.add(user)
    db.session.add(vendor)
    db.session.commit()

    return jsonify(status="success", message="Vendor Created SuccessFul", data=VendorSchema().dump(vendor))


@bp.route("/vendor")
def get_vendors():
    vendors = Vendor.query.order_by(Vendor.created.desc()).all()
    return jsonify(
        status="success",
        message="Vendors Found",
        data=VendorSchema(many=True).dump(vendors)
    )


@bp.route("/vendor/<int:vendor_id>")
def get_vendor(vendor_id):
    vendor = Vendor.query.get(vendor_id)
    if not vendor:
        return jsonify(
            status="failed",
            message="Vendor Not Found",
        )
    return jsonify(
        status="success",
        message="Vendor Found",
        data=VendorSchema().dump(vendor)
    )


@bp.route('/vendor/<int:vendor_id>/image', methods=['PUT'])
@login_required(role="vendor")
def upload_vendor_avatar(vendor_id):
    data = request.get_json()
    if not data:
        return jsonify(status="failed", message="No Data Sent!")
    if not data.get('type'):
        return jsonify(status="failed", message="Image type required!")
    if not data.get('img'):
        return jsonify(status="failed", message="Image data not sent!")
    if data.get('type').lower() not in Config.ALLOWED_EXTENSIONS:
        return jsonify(status="failed", message="Extension not supported!")

    vendor = Vendor.query.get(vendor_id)
    if not vendor:
        return jsonify(status='failed', message='Vendor Not Found')

    unique_filename = str(uuid.uuid4()) + '.' + data['type'].lower()
    if vendor.img:
        delete_file(vendor.img, Config.AVATAR_UPLOAD_FOLDER)

    save_image(
        unique_filename,
        data['img'],
        Config.AVATAR_UPLOAD_FOLDER,
        Config.AVATAR_SIZE, True
    )
    vendor.img = unique_filename

    db.session.commit()

    return jsonify(
        status='success',
        message='Vendor Avatar Upload',
        data=VendorSchema().dump(vendor)
    )


@bp.route("/vendor/<int:vendor_id>/password", methods=["PUT"])
@login_required(role='vendor')
def update_password_vendor(vendor_id):
    data = request.get_json()

    if data is None:
        return jsonify(status="failed", message="No Data Sent!")
    if not data.get("password"):
        return jsonify(status="failed", message="Last Name required!")
    if not data.get("new_password"):
        return jsonify(status="failed", message="First Name required!")
    if not data.get("confirm_password"):
        return jsonify(status="failed", message="First Name required!")
    if data.get("confirm_password") != data.get("new_password"):
        return jsonify(status="failed", message="First Name required!")

    vendor = Vendor.query.get(vendor_id)
    if not vendor:
        return jsonify(status="failed", message="Vendor Not Found")

    vendor.set_password(data.get("new_password"))

    db.session.commit()

    return jsonify(
        status="success",
        message="Vendor Password Updated",
        data=VendorSchema().dump(vendor)
    )


@bp.route("/vendor/<int:vendor_id>", methods=["PUT"])
@login_required(role='vendor')
def update_vendor(vendor_id):
    data = request.get_json()

    if data is None:
        return jsonify(status="failed", message="No Data Sent!")
    if not data.get("last_name"):
        return jsonify(status="failed", message="Last Name required!")
    if not data.get("first_name"):
        return jsonify(status="failed", message="First Name required!")

    vendor = Vendor.query.get(vendor_id)
    if not vendor:
        return jsonify(status="failed", message="Vendor Not Found")

    vendor.first_name = data.get("first_name")
    vendor.last_name = data.get("last_name")
    vendor.phone = data.get("phone")

    vendor.bank = data.get("bank")
    vendor.account_number = data.get("account_number")

    db.session.commit()

    return jsonify(
        status="success",
        message="Vendor Updated SuccessFul",
        data=VendorSchema().dump(vendor)
    )


@bp.route("/client", methods=["POST"])
def create_client():
    data = request.get_json()

    if data is None:
        return jsonify(status="failed", message="No Data Sent!")
    if not data.get("email"):
        return jsonify(status="failed", message="Email Address required!")
    if not re.search(Config.EMAIL_REGEX, data.get("email")):
        return jsonify(status="failed", message="Invalid Email Address!")
    if not data.get("last_name"):
        return jsonify(status="failed", message="Last Name required!")
    if not data.get("first_name"):
        return jsonify(status="failed", message="First Name required!")
    if not data.get("password"):
        return jsonify(status="failed", message="Password required!")

    client = Client.query.filter_by(email=data["email"].lower()).first()
    if client:
        return jsonify(status="failed", message="Email Address already in system!")

    user = User()

    client = Client()

    referral = Client.query.get(data.get("referral_id"))
    if referral:
        client.referral = referral

    client.email = data.get("email").lower()
    client.user = user
    client.first_name = data.get("first_name")
    client.last_name = data.get("last_name")
    client.phone = data.get("phone")

    client.set_password(data.get("password"))
    client.last_login = datetime.now()

    db.session.add(user)
    db.session.add(client)
    db.session.commit()

    return jsonify(status="success", message="Client Created SuccessFul", data=ClientSchema().dump(client))


@bp.route("/client/<int:client_id>/referred")
def get_client_referred(client_id):
    clients = Client.query.filter_by(referral_id=client_id).order_by(Client.created.desc()).all()
    return jsonify(
        status="success",
        message="Referred Found",
        data=ClientSchema(many=True).dump(clients)
    )


@bp.route("/client")
def get_clients():
    clients = Client.query.order_by(Client.created.desc()).all()
    return jsonify(
        status="success",
        message="Vendors Found",
        data=ClientSchema(many=True).dump(clients)
    )


@bp.route("/client/<int:client_id>")
def get_client(client_id):
    client = Client.query.get(client_id)
    if not client:
        return jsonify(
            status="failed",
            message="Client Not Found",
        )
    return jsonify(
        status="success",
        message="Client Found",
        data=ClientSchema().dump(client)
    )


@bp.route("/client/<string:email>")
def get_client_by_email(email):
    client = Client.query.filter_by(email=email).first()
    if not client:
        return jsonify(
            status="failed",
            message="Client Not Found",
        )
    return jsonify(
        status="success",
        message="Client Found",
        data=ClientSchema().dump(client)
    )


@bp.route('/client/<int:client_id>/image', methods=['PUT'])
@login_required(role="client")
def upload_client_avatar(client_id):
    data = request.get_json()
    if not data:
        return jsonify(status="failed", message="No Data Sent!")
    if not data.get('type'):
        return jsonify(status="failed", message="Image type required!")
    if not data.get('img'):
        return jsonify(status="failed", message="Image data not sent!")
    if data.get('type').lower() not in Config.ALLOWED_EXTENSIONS:
        return jsonify(status="failed", message="Extension not supported!")

    client = Client.query.get(client_id)
    if not client:
        return jsonify(status='failed', message='Admin Not Found')

    unique_filename = str(uuid.uuid4()) + '.' + data['type'].lower()
    if client.img:
        delete_file(client.img, Config.AVATAR_UPLOAD_FOLDER)

    save_image(
        unique_filename,
        data['img'],
        Config.AVATAR_UPLOAD_FOLDER,
        Config.AVATAR_SIZE, True
    )
    client.img = unique_filename

    db.session.commit()

    return jsonify(
        status='success',
        message='Client Avatar Upload',
        data=ClientSchema().dump(client)
    )


@bp.route("/client/<int:client_id>/password", methods=["PUT"])
@login_required(role='client')
def update_password_client(client_id):
    data = request.get_json()

    if data is None:
        return jsonify(status="failed", message="No Data Sent!")
    if not data.get("password"):
        return jsonify(status="failed", message="Last Name required!")
    if not data.get("new_password"):
        return jsonify(status="failed", message="First Name required!")
    if not data.get("confirm_password"):
        return jsonify(status="failed", message="First Name required!")
    if data.get("confirm_password") != data.get("new_password"):
        return jsonify(status="failed", message="First Name required!")

    client = Client.query.get(client_id)
    if not client:
        return jsonify(status="failed", message="Client Not Found")

    client.set_password(data.get("new_password"))

    db.session.commit()

    return jsonify(
        status="success",
        message="Client Password Updated",
        data=ClientSchema().dump(client)
    )


@bp.route("/client/<int:client_id>", methods=["PUT"])
@login_required(role='client')
def update_client(client_id):
    data = request.get_json()

    print(data)

    if data is None:
        return jsonify(status="failed", message="No Data Sent!")
    if not data.get("last_name"):
        return jsonify(status="failed", message="Last Name required!")
    if not data.get("first_name"):
        return jsonify(status="failed", message="First Name required!")

    client = Client.query.get(client_id)
    if not client:
        return jsonify(status="failed", message="Vendor Not Found")

    client.first_name = data.get("first_name")
    client.last_name = data.get("last_name")
    client.phone = data.get("phone")
    client.bank = data.get("bank")
    client.account_number = data.get("account_number")

    db.session.commit()

    return jsonify(
        status="success",
        message="Client Updated SuccessFul",
        data=ClientSchema().dump(client)
    )


@bp.route("/pin", methods=['POST'])
@login_required(role="admin")
def generate_pins():
    data = request.get_json()

    if data is None:
        return jsonify(status="failed", message="No Data Sent!")
    if not data.get("vendor_id"):
        return jsonify(status="failed", message="Vendor Id Required!")
    if not data.get("amount"):
        return jsonify(status="failed", message="Amount of pins Required!")
    if not int(data.get("amount")):
        return jsonify(status="failed", message="Amount of pins must be a number!")

    vendor = Vendor.query.get(data.get("vendor_id"))
    if not vendor:
        return jsonify(status="failed", message="Vendor Not Found")

    for x in range(int(data.get("amount"))):
        client_pin = ClientPin()
        client_pin.pin = uuid.uuid4()
        client_pin.vendor_id = vendor.id
        db.session.add(client_pin)

    db.session.commit()

    return jsonify(
        status="success",
        message="Pins Generated",
        data=VendorSchema().dump(vendor)
    )


@bp.route("/pin")
@login_required(role="admin")
def get_pins():
    pins = ClientPin.query.order_by(ClientPin.created.desc()).all()
    return jsonify(
        status="success",
        message="Client Pins Found",
        data=ClientPinSchema(many=True).dump(pins)
    )


@bp.route("/vendor/<int:vendor_id>/pins")
@login_required(role="vendor")
def get_vendor_pins(vendor_id):
    pins = ClientPin.query.filter_by(vendor_id=vendor_id).order_by(ClientPin.created.desc()).all()
    return jsonify(
        status="success",
        message="Vendors Pins Found ",
        data=ClientPinSchema(many=True).dump(pins)
    )


@bp.route("/pin", methods=['PUT'])
@login_required(role="client")
def use_pin():
    data = request.get_json()

    if data is None:
        return jsonify(status="failed", message="No Data Sent!")
    if not data.get("pin"):
        return jsonify(status="failed", message="Pin Required!")

    client_pin = ClientPin.query.filter_by(pin=data.get("pin")).first()
    if not client_pin:
        return jsonify(status="failed", message="Pin Not Found!")
    if client_pin.used:
        return jsonify(status="failed", message="Pin Already Used!")

    client = User.current().client
    setting = Setting.query.first()

    if client.referral:
        client.referral.referral_wallet += setting.referral_bonus

    client.user.active = True
    client_pin.client = client
    client_pin.used = True
    client.royalty_wallet += setting.sign_up_bonus

    db.session.commit()

    return jsonify(
        status="success",
        message="Account Activated",
        data=ClientSchema().dump(client)
    )
