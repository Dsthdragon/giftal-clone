import uuid

from flask import jsonify

from app.api import bp, login_required

from app.schemas import *

from app import db

from app.utils import save_image
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
    unique_filename = ''
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
    client = User.current().client
    if client and client.pin:
        post_view = PostView.query.filter_by(client_id=client.id, post_id=post_id).first()
        if not post_view:
            setting = Setting.query.first()
            activity = Activity(client_id=client.id)
            db.session.add(activity)
            post_view = PostView()
            post_view.client_id=client.id
            post_view.activity = activity
            post_view.post_id = post_id
            client.royalty_wallet += setting.read_news
            db.session.add(post_view)
            db.session.commit()

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
        message='Post Updated',
        data=PostSchema().dump(post)
    )


@bp.route("/comment", methods=['POST'])
@login_required(role='client')
def create_comment():
    data = request.get_json()
    if not data:
        return jsonify(status="failed", message='Data Not Sent')
    post = Post.query.get(data.get('post_id'))
    if not post:
        return jsonify(status="failed", message='Post Not Found')
    if not data.get('comment'):
        return jsonify(status="failed", message='Comment Not Found')
    client = User.current().client

    if not client.pin:
        return jsonify(status="failed", message='Activate Account to Comment')
    activity = Activity()
    activity.client_id = client.id
    db.session.add(activity)
    comment = Comment()
    comment.comment = data.get('comment')
    comment.client_id = client.id
    comment.activity = activity
    comment.post_id = post.id
    db.session.add(comment)

    db.session.commit()
    return jsonify(
        status="success",
        message='Comment Created',
        data=CommentSchema().dump(comment)
    )


@bp.route("/comment")
def get_comments():
    comments = Comment.query.order_by(Comment.created.desc()).all()
    return jsonify(
        status="success",
        message='Comments Found',
        data=CommentSchema(many=True).dump(comments)
    )


@bp.route("/comment/<int:comment_id>")
def get_comment(comment_id):
    comment = Comment.query.get(comment_id)
    return jsonify(
        status="success",
        message='Comment Found',
        data=CommentSchema().dump(comment)
    )


@bp.route("/comment/<int:comment_id>", methods=['DELETE'])
@login_required(role="staff")
def delete_comment(comment_id):
    comment = Comment.query.get(comment_id)
    if comment.valid:
        return jsonify(
            status="failed",
            message='Already Valid',
        )

    db.session.delete(comment)
    db.session.delete(comment.activity)
    db.session.commit()
    return jsonify(
        status="success",
        message='Comment Deleted',
    )


@bp.route("/comment/<int:comment_id>", methods=['PUT'])
@login_required(role="staff")
def update_comment(comment_id):
    comment = Comment.query.get(comment_id)
    if comment and not comment.valid:
        setting = Setting.query.first()
        comment.client.royalty_wallet += setting.comment
        comment.valid = True
        db.session.commit()

    return jsonify(
        status="success",
        message='Comment Validated',
        data=CommentSchema().dump(comment)
    )


@bp.route("/post/<int:post_id>/comments")
def get_post_comments(post_id):
    comments = Comment.query.filter_by(post_id=post_id).order_by(Comment.created.desc()).all()
    return jsonify(
        status="success",
        message='Comments Found',
        data=CommentSchema(many=True).dump(comments)
    )


@bp.route("/client/<int:client_id>/comments")
def get_client_comments(client_id):
    comments = Comment.query.filter_by(client_id=client_id).order_by(Comment.created.desc()).all()
    return jsonify(
        status="success",
        message='Comments Found',
        data=CommentSchema(many=True).dump(comments)
    )


@bp.route("/post_views")
def get_all_post_views():
    post_views = PostView.query.order_by(PostView.created.desc()).all()
    return jsonify(
        status='success',
        message='Post Views Found',
        data=PostViewSchema(many=True).dump(post_views)
    )


@bp.route("/client/<int:client_id>/post_views")
def get_client_post_views(client_id):
    post_views = PostView.query.filter_by(
        client_id=client_id
    ).order_by(PostView.created.desc()).all()
    return jsonify(
        status='success',
        message='Post Views Found',
        data=PostViewSchema(many=True).dump(post_views)
    )


@bp.route("/post/<int:post_id>/post_views")
def get_post_views(post_id):
    post_views = PostView.query.filter_by(
        post_id=post_id
    ).order_by(PostView.created.desc()).all()
    return jsonify(
        status='success',
        message='Post Views Found',
        data=PostViewSchema(many=True).dump(post_views)
    )

