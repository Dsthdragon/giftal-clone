from app import ma

from marshmallow import fields

from app.models import *


class UserSchema(ma.TableSchema):
    class Meta:
        table = User.__table__

    client = fields.Nested("ClientSchema", only=["id", "first_name", "last_name", "email", "phone", "image_url"])
    admin = fields.Nested("AdminSchema", only=["id", "first_name", "last_name", "email", "phone", "image_url"])
    vendor = fields.Nested("VendorSchema", only=["id", "first_name", "last_name", "email", "phone", "image_url"])


class AdminSchema(ma.TableSchema):
    class Meta:
        table = Admin.__table__

    user = fields.Nested("UserSchema", only=['id', 'blocked', 'active'])
    admin_role = fields.Nested("AdminRoleSchema")
    image_url = fields.String()


class ClientSchema(ma.TableSchema):
    class Meta:
        table = Client.__table__

    user = fields.Nested("UserSchema", only=['id', 'blocked', 'active'])
    image_url = fields.String()

    pin = fields.Nested("ClientPinSchema", exclude=['client', 'vendor'])


class AdminRoleSchema(ma.TableSchema):
    class Meta:
        table = AdminRole.__table__


class ClientPinSchema(ma.TableSchema):
    class Meta:
        table = ClientPin.__table__

    client = fields.Nested("ClientSchema", exclude=["pin"])
    vendor = fields.Nested("VendorSchema")


class VendorSchema(ma.TableSchema):
    class Meta:
        table = Vendor.__table__

    user = fields.Nested("UserSchema", only=['id', 'blocked', 'active'])
    image_url = fields.String()
    total_pins = fields.Int()
    used_pins = fields.Int()
    available_pins = fields.Int()


class ActivitySchema(ma.TableSchema):
    class Meta:
        table = Activity.__table__

    post_share = fields.Nested("PostShareSchema")
    comment = fields.Nested("CommentSchema")
    post_view = fields.Nested("PostViewSchema")
    client = fields.Nested("ClientSchema", only=["id", "first_name", "last_name", "email", "phone", "image_url"])


class CategorySchema(ma.TableSchema):
    class Meta:
        table = Category.__table__


class CommentSchema(ma.TableSchema):
    class Meta:
        table = Comment.__table__

    client = fields.Nested("ClientSchema", only=["id", "first_name", "last_name", "email", "phone", "image_url"])
    post = fields.Nested("PostSchema", only=["id", "title", "abstract"])


class PostSchema(ma.TableSchema):
    class Meta:
        table = Post.__table__

    image_url = fields.String()
    category = fields.Nested("CategorySchema")


class PostViewSchema(ma.TableSchema):
    class Meta:
        table = PostView.__table__

    client = fields.Nested("ClientSchema", only=["id", "first_name", "last_name", "email", "phone", "image_url"])
    post = fields.Nested("PostSchema", only=["id", "title", "abstract"])


class PostShareSchema(ma.TableSchema):
    class Meta:
        table = PostShare.__table__

    client = fields.Nested("ClientSchema", only=["id", "first_name", "last_name", "email", "phone", "image_url"])
    post = fields.Nested("PostSchema", only=["id", "title", "abstract"])


class AdvertsSchema(ma.TableSchema):
    class Meta:
        table = Adverts.__table__

    image_url = fields.String()


class SettingSchema(ma.TableSchema):
    class Meta:
        table = Setting.__table__


class ClientRequestSchema(ma.TableSchema):
    class Meta:
        table = ClientRequest.__table__

    client = fields.Nested(
        "ClientSchema",
        only=["id", "first_name", "last_name", "email", "phone", "image_url", 'bank', 'account_number']
    )
