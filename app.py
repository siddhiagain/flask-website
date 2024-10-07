from flask import Flask
from views import views


app = Flask(__name__)
app.register_blueprint(views)

if __name__=="__main__":
    app.run(debug=True,host="127.0.0.1",port=8000)