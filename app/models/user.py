from datetime import datetime, timedelta

from flask import request
from sqlalchemy import event
from sqlalchemy.ext.declarative import declared_attr
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy_utils import EncryptedType
from sqlalchemy_utils.types.encrypted.encrypted_type import AesEngine
from werkzeug.security import generate_password_hash, check_password_hash

from app import db
from app.utils import display_image, delete_file
from config import Config

import jwt


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created = db.Column(db.DateTime, default=datetime.utcnow())
    blocked = db.Column(db.Boolean)
    active = db.Column(db.Boolean)

    client = db.relationship("Client", backref=db.backref("user", lazy=True), uselist=False)
    admin = db.relationship("Admin", backref=db.backref("user", lazy=True), uselist=False)
    vendor = db.relationship("Vendor", backref=db.backref("user", lazy=True), uselist=False)

    def generate_token(self, expires):
        return jwt.encode(
            {
                'id': self.id,
                'expires': expires,
                'expiration_date': str(datetime.utcnow() + timedelta(days=1))
            },
            Config.SECRET_KEY,
            algorithm='HS256'
        ).decode()

    @staticmethod
    def decode_token(token):
        try:
            payload = jwt.decode(token, Config.SECRET_KEY)
            if payload['expires'] and datetime.strptime(payload['expiration_date'], "%Y-%m-%d %H:%M:%S.%f") < datetime.utcnow():
                return "token expired. please log in again."
            return payload['id']
        except jwt.ExpiredSignatureError:
            return 'Signature expired. Please log in again.'
        except jwt.InvalidTokenError:
            return 'Invalid token. Please log in again.'

    @staticmethod
    def current():
        return User.query.get(User.decode_token(request.cookies.get('auth')))


class UserMixin:
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(
        EncryptedType(db.String(255), Config.SECRET_KEY, AesEngine, 'pkcs5'),
        nullable=False
    )
    first_name = db.Column(
        EncryptedType(db.String(255), Config.SECRET_KEY, AesEngine, 'pkcs5'),
        nullable=False
    )
    last_name = db.Column(
        EncryptedType(db.String(255), Config.SECRET_KEY, AesEngine, 'pkcs5'),
        nullable=False
    )
    phone = db.Column(db.String(100))

    img = db.Column(EncryptedType(db.String(500), Config.SECRET_KEY, AesEngine, 'pkcs5'))
    password_hash = db.Column(db.String(300), nullable=False)
    created = db.Column(db.DateTime, default=datetime.utcnow())
    updated = db.Column(db.DateTime, onupdate=datetime.utcnow())

    @declared_attr
    def user_id(self):
        return db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    @hybrid_property
    def image_url(self):
        return display_image(self.img, "/static/upload/avatars/")

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    @classmethod
    def __declare_last__(cls):
        event.listen(cls, "after_delete", cls.delete_image)

    @staticmethod
    def delete_image(mapper, connection, target):
        delete_file(target.img, Config.AVATAR_UPLOAD_FOLDER)


class Admin(UserMixin, db.Model):
    admin_role_id = db.Column(db.Integer, db.ForeignKey("admin_role.id"))
    admin_role = db.relationship("AdminRole", backref=db.backref("admins", lazy=True))


class Client(UserMixin, db.Model):
    referral_wallet = db.Column(db.Float, default=0)
    royalty_wallet = db.Column(db.Float, default=0)

    referral_id = db.Column(db.Integer, db.ForeignKey("client.id", ondelete='SET NULL'))

    referral = db.relationship(
        "Client", backref=db.backref("referred"), remote_side='Client.id'
    )

    bank = db.Column(db.String(100))
    account_number = db.Column(db.String(20))

    last_login = db.Column(db.DateTime)

    pin = db.relationship("ClientPin", backref=db.backref("client", lazy=True), uselist=False)
    client_request = db.relationship("ClientRequest", backref=db.backref("client", lazy=True), uselist=False)

    @hybrid_property
    def total_referred(self):
        return len(Client.query.filter_by(referral_id=self.id).all())

    @hybrid_property
    def total_activity(self):
        return len(self.activities)


class AdminRole(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    created = db.Column(db.DateTime, default=datetime.utcnow())


class ClientPin(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    pin = db.Column(db.String(100), nullable=False, unique=True)
    used = db.Column(db.Boolean)
    created = db.Column(db.DateTime, default=datetime.utcnow())
    updated = db.Column(db.DateTime, onupdate=datetime.utcnow())
    client_id = db.Column(db.Integer, db.ForeignKey("client.id"))
    vendor_id = db.Column(db.Integer, db.ForeignKey("vendor.id"), nullable=False)


class Vendor(UserMixin, db.Model):
    bank = db.Column(db.String(100))
    account_number = db.Column(db.String(20))
    pins = db.relationship("ClientPin", backref=db.backref("vendor", lazy=True))

    @hybrid_property
    def total_pins(self):
        return len(self.pins)

    @hybrid_property
    def used_pins(self):
        return self.filter_pins(True)

    @hybrid_property
    def available_pins(self):
        return self.filter_pins(False)

    def filter_pins(self, used=True):
        return (
            sum(
                1
                if used == pin.used
                else 0
                for pin in self.pins
            )
            if self.pins
            else 0
        )


class Setting(db.Model):
    id = db.Column(db.Integer, primary_key=True, default=1)
    sign_up_bonus = db.Column(db.Float, default=200)
    read_news = db.Column(db.Float, default=50)
    comment = db.Column(db.Float, default=50)
    share_news = db.Column(db.Float, default=50)
    login_bonus = db.Column(db.Float, default=200)
    share_daily_sponsored = db.Column(db.Float, default=200)
    share_daily_advert = db.Column(db.Float, default=200)
    referral_bonus = db.Column(db.Float, default=1000)
    testimonies_bonus = db.Column(db.Float, default=500)

    point_rate = db.Column(db.Float, default=4)
    min_withdrawal_limit = db.Column(db.Float, default=3000)
    max_withdrawal_limit = db.Column(db.Float, default=5000)
    sign_up_fee = db.Column(db.Float, default=3000)


class ClientRequest(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    client_id = db.Column(db.Integer, db.ForeignKey("client.id"))
    amount = db.Column(db.Float, nullable=False)
    type = db.Column(db.String(100), nullable=False)
    paid = db.Column(db.Boolean, default=False)
    confirmed = db.Column(db.Boolean, default=False)
    created = db.Column(db.DateTime, default=datetime.utcnow())
    updated = db.Column(db.DateTime, onupdate=datetime.utcnow())
