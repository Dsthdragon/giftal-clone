import uuid

from flask import jsonify, make_response

from app.api import bp, login_required

from app.models import *

from app.schemas import *

from app import db

import re

from app.utils import save_image, delete_file
from config import Config


@bp.route("/category", methods=['POST'])
@login_required(role='admin')
def create_category():
    data = request.get_json()

    if not data:
        return jsonify(status='failed', message="No Data Sent")

    if not data.get("title"):
        return jsonify(status="failed", message="Title is Required")

    category = Category()
    category.title = data.get('title')
    category.description = data.get('description')

    db.session.add(category)
    db.session.commit()

    return jsonify(
        status="success",
        message='Category Created',
        data=CategorySchema().dump(category)
    )


@bp.route("/category")
def get_categories():
    categories = Category.query.all()

    return jsonify(
        status="success",
        message="Categories Found",
        data=CategorySchema(many=True).dump(categories)
    )


@bp.route("/category/<int:category_id>")
def get_category(category_id):
    category = Category.query.get(category_id)
    if not category:
        return jsonify(status="failed", message='Category Not Found')

    return jsonify(
        status="success",
        message='Category Found',
        data=CategorySchema().dump(category)
    )


@bp.route("/category/<int:category_id>/posts")
def get_category_posts(category_id):
    posts = Post.query.filter_by(category_id=category_id).order_by(Post.created.desc()).all()

    return jsonify(
        status="success",
        message="Posts Found",
        data=PostSchema(many=True).dump(posts)
    )


@bp.route("/category/<int:category_id>", methods=['DELETE'])
@login_required(role='admin')
def delete_category(category_id):
    category = Category.query.get(category_id)
    db.session.delete(category)
    db.session.commit()
    return jsonify(
        status="success",
        message='Category Delete',
    )


@bp.route("/category", methods=['PUT'])
@login_required(role='admin')
def update_category():
    data = request.get_json()
    category = Category.query.get(data.get('id'))
    if not category:
        return jsonify(status="failed", message='Category Not Found')

    category.title = data.get('title')
    category.description = data.get('description')
    db.session.commit()
    return jsonify(
        status="success",
        message='Category Updated',
        data=CategorySchema().dump(category)
    )


@bp.route("/post", methods=['POST'])
@login_required(role='admin')
def create_post():
    data = request.get_json()

    if not data:
        return jsonify(status='failed', message="No Data Sent")

    if not data.get("title"):
        return jsonify(status="failed", message="Title is Required")
    unique_filename = '';
    if data.get("img"):
        if not data['img'].get("src"):
            return jsonify(status="failed", message="Image data not sent!")
        if data['img'].get('type').lower() not in Config.ALLOWED_EXTENSIONS:
            return jsonify(status="failed", message="Extension not supported!")

        unique_filename = str(uuid.uuid4()) + '.' + data['img']['type'].lower()
        save_image(
            unique_filename,
            data['img'].get("src"),
            Config.POST_UPLOAD_FOLDER,
            Config.BLOG_SIZE
        )
    post = Post()
    post.admin_id = 1
    post.title = data.get('title')
    post.link = data.get('link')
    post.abstract = data.get('abstract')
    post.content = data.get('content')
    post.img = unique_filename
    post.category_id = data.get('category_id')
    post.is_sponsored = data.get('is_sponsored')

    db.session.add(post)
    db.session.commit()

    return jsonify(
        status="success",
        message='Post Created',
        data=PostSchema().dump(post)
    )


@bp.route("/post")
def get_posts():
    posts = Post.query.order_by(Post.created.desc()).all()

    return jsonify(
        status="success",
        message="Posts Found",
        data=PostSchema(many=True).dump(posts)
    )


@bp.route("/post/<int:post_id>")
def get_post(post_id):
    post = Post.query.get(post_id)
    if not post:
        return jsonify(status="failed", message='Post Not Found')

    return jsonify(
        status="success",
        message='Post Found',
        data=PostSchema().dump(post)
    )


@bp.route("/post/<int:post_id>", methods=['DELETE'])
@login_required(role='admin')
def delete_post(post_id):
    post = Post.query.get(post_id)
    db.session.delete(post)
    db.session.commit()
    return jsonify(
        status="success",
        message='Post Delete',
    )


@bp.route("/post/<int:post_id>", methods=['PUT'])
@login_required(role='admin')
def update_post(post_id):
    data = request.get_json()
    post = Post.query.get(post_id)
    if not post:
        return jsonify(status="failed", message='Post Not Found')

    post.title = data.get('title')
    post.link = data.get('link')
    post.abstract = data.get('abstract')
    post.content = data.get('content')
    post.category_id = data.get('category_id')
    post.is_sponsored = data.get('is_sponsored')

    db.session.commit()
    return jsonify(
        status="success",
        message='Category Updated',
        data=PostSchema().dump(post)
    )


