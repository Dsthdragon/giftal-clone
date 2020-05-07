from datetime import datetime

from sqlalchemy import event
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy_utils import EncryptedType
from sqlalchemy_utils.types.encrypted.encrypted_type import AesEngine

from app import db
from app.utils import delete_file, display_image
from config import Config


class Activity(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    client_id = db.Column(db.Integer, db.ForeignKey("client.id"), nullable=False)

    client = db.relationship("Client", backref=db.backref("activities", lazy=True))
    post_share = db.relationship("PostShare", backref=db.backref("activity", lazy=True), uselist=False)
    comment = db.relationship("Comment", backref=db.backref("activity", lazy=True), uselist=False)
    post_view = db.relationship("PostView", backref=db.backref("activity", lazy=True), uselist=False)

    created = db.Column(db.DateTime, default=datetime.utcnow())
    updated = db.Column(db.DateTime, onupdate=datetime.utcnow())


class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text, nullable=True)

    created = db.Column(db.DateTime, default=datetime.utcnow())
    updated = db.Column(db.DateTime, onupdate=datetime.utcnow())


class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.Text, nullable=False)
    client_id = db.Column(db.Integer, db.ForeignKey("client.id"), nullable=False)
    activity_id = db.Column(db.Integer, db.ForeignKey("activity.id"), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey("post.id"), nullable=False)
    valid = db.Column(db.Boolean)
    created = db.Column(db.DateTime, default=datetime.utcnow())
    updated = db.Column(db.DateTime, onupdate=datetime.utcnow())

    client = db.relationship("Client", backref=db.backref("comments", lazy=True))
    post = db.relationship("Post", backref=db.backref("comments", lazy=True))


class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    admin_id = db.Column(db.Integer, db.ForeignKey("admin.id"), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey("category.id"), nullable=False)
    link = db.Column(db.String(200), nullable=False)
    content = db.Column(db.Text, nullable=False)
    abstract = db.Column(db.String(400), nullable=False)

    img = db.Column(EncryptedType(db.String(500), Config.SECRET_KEY, AesEngine, 'pkcs5'))
    is_published = db.Column(db.Boolean)
    is_sponsored = db.Column(db.Boolean)

    category = db.relationship('Category', backref=db.backref("posts", lazy=True))

    created = db.Column(db.DateTime, default=datetime.utcnow())
    updated = db.Column(db.DateTime, onupdate=datetime.utcnow())

    @hybrid_property
    def image_url(self):
        return display_image(self.img, "/static/upload/posts/")


class PostView(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    client_id = db.Column(db.Integer, db.ForeignKey("client.id"), nullable=False)
    activity_id = db.Column(db.Integer, db.ForeignKey("activity.id"), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey("post.id"), nullable=False)
    post = db.relationship("Post", backref=db.backref("post_views", lazy=True))

    client = db.relationship("Client", backref=db.backref("post_views", lazy=True))

    created = db.Column(db.DateTime, default=datetime.utcnow())
    updated = db.Column(db.DateTime, onupdate=datetime.utcnow())


class PostShare(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    client_id = db.Column(db.Integer, db.ForeignKey("client.id"), nullable=False)
    activity_id = db.Column(db.Integer, db.ForeignKey("activity.id"), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey("post.id"), nullable=False)

    client = db.relationship("Client", backref=db.backref("post_shares", lazy=True))
    post = db.relationship("Post", backref=db.backref("post_shares", lazy=True))

    created = db.Column(db.DateTime, default=datetime.utcnow())
    updated = db.Column(db.DateTime, onupdate=datetime.utcnow())


class Adverts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.Text, nullable=False)
    link = db.Column(db.String(400))

    img = db.Column(EncryptedType(db.String(500), Config.SECRET_KEY, AesEngine, 'pkcs5'))

    created = db.Column(db.DateTime, default=datetime.utcnow())
    updated = db.Column(db.DateTime, onupdate=datetime.utcnow())

    @hybrid_property
    def image_url(self):
        return display_image(self.img, "/static/upload/adverts/")


@event.listens_for(Post, 'after_delete')
def delete_image(mapper, connection, target):
    delete_file(target.img, Config.POST_UPLOAD_FOLDER)


@event.listens_for(Adverts, 'after_delete')
def delete_image(mapper, connection, target):
    delete_file(target.img, Config.ADVERT_UPLOAD_FOLDER)
