from flask import Flask
app = Flask(__name__, static_folder='../dist', static_url_path="/")


@app.route('/message')
def index():
    return "Welcome to CodingX"


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return app.send_static_file("index.html")
