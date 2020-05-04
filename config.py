import os


class Config(object):
    SQLALCHEMY_DATABASE_URI = os.environ.get('JAWSDB_MARIA_URL') or "mysql://root:""@localhost/giftal_clone"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    AWS_SECRET_KEY = os.environ.get('AWS_SECRET_KEY') or "test"
    AWS_ACCESS_KEY = os.environ.get('AWS_ACCESS_KEY') or "test"
    LOCAL_STORAGE = os.environ.get('LOCAL_STORAGE') or 1
    AWS_BUCKET = os.environ.get('AWS_BUCKET') or "TEST"
    AWS_BUCKET_LINK = os.environ.get('AWS_BUCKET_LINK') or 'http://127.0.0.1:5000/'

    POSTS_PER_PAGE = 10
    SECRET_KEY = os.environ.get('SECRET_KEY') or "giftal_code"
    POST_UPLOAD_FOLDER = os.path.abspath(
        os.path.join("app", "static", "upload", "posts")
    )
    AVATAR_UPLOAD_FOLDER = os.path.abspath(
        os.path.join("app", "static", "upload", "avatars")
    )
    ADVERT_UPLOAD_FOLDER = os.path.abspath(
        os.path.join("app", "static", "upload", "adverts")
    )
    BLOG_SIZE = [500, 500]
    CATEGORY_SIZE = [200, 200]
    AVATAR_SIZE = [100, 100]
    BANNER_SIZE = [1280, 400]
    CROP_SIZE = [200, 200]
    ALLOWED_EXTENSIONS = ['png', 'jpeg', 'jpg', 'gif']
    EMAIL_REGEX = "^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
