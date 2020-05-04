import os

from flask import Flask, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow
from flask_cors import CORS

from config import Config

db = SQLAlchemy()
ma = Marshmallow()
migrate = Migrate()
cors = CORS()


def create_app(config_class=Config):
    app = Flask(__name__, static_folder="static", template_folder="static")
    app.config.from_object(config_class)
    app.debug = True
    db.init_app(app)
    ma.init_app(app)
    migrate.init_app(app, db)
    cors.init_app(app)

    from app.api import bp as api_bp

    app.register_blueprint(api_bp, url_prefix="/api/")

    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def serve(path):
        extension = path.split('.')
        extension = extension[-1]
        if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
            print(f"static - {path}")
            if extension == 'js':
                return send_from_directory(app.static_folder, path, mimetype='text/javascript')
            else:
                return send_from_directory(app.static_folder, path)
        elif path != "" and os.path.exists(os.path.join(app.template_folder, path)):
            return send_from_directory(app.template_folder, path)
        else:
            return send_from_directory(app.template_folder, "index.html")

    return app


from app.models import *
