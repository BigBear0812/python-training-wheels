from flask import Flask, request
import re
app = Flask(__name__, static_folder='../dist', static_url_path="/")


@app.route('/api/HelloWorld', methods=['POST'])
def hello_world():
    name = request.get_data(True, True, False)
    return "Welcome " + str(name)

@app.route('/api/ConvertFile', methods=['POST'])
def file_converter():
    file = request.files.get("file")
    return ""


@app.route('/', defaults={'path': ''})
@app.route('/<string:path>')
@app.route('/<path:path>')
def catch_all(path):
    # Match if the path has a . in it denoting a file request instead of an arbitrary page path
    match = re.search('.+\\..+', path)
    if match is None:
        return app.send_static_file("index.html")
    else:
        return app.send_static_file(path)
