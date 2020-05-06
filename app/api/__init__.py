from functools import wraps

from flask import Blueprint, request, jsonify

from app.models import User

bp = Blueprint('api', __name__)


def login_required(role=None):
    def check_login(f):
        @wraps(f)
        def wrap(*args, **kwargs):
            user_id = User.decode_token(request.cookies.get('auth'))
            _user = User.current()
            if not _user:
                return jsonify(status="failed", message=user_id, isAuth=False)
            if _user.blocked:
                return jsonify(status="failed", message="User Account is Blocked", isAuth=False)
            if role == 'admin' and not _user.admin:
                return jsonify(status="failed", message="Staff Only Area", isAuth=False)
            elif role == 'vendor' and not _user.vendor:
                return jsonify(status="failed", message="Vendor Only Area", isAuth=False)
            elif role == 'client' and not _user.client:
                return jsonify(status="failed", message="Client Only Area", isAuth=False)
            return f(*args, **kwargs)

        return wrap
    return check_login


from app.api.routes import user, blog
