from flask import Blueprint, render_template

views = Blueprint('views', __name__, url_prefix='/')

common = {
    'first_name': 'Siddhi',
    'last_name': 'Parashar',
    'alias': 'siddhipiddi'
}

@views.route('/')
def index():
    return render_template("home.html", common=common)
