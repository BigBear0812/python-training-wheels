from flask import Flask, request, send_file
import re
import os
import json
from csv_to_json import convert

app = Flask(__name__, static_folder='../dist', static_url_path="/")
app.config.from_file("config.json", load=json.load)


@app.route('/api/HelloWorld', methods=['POST'])
def hello_world():
    name = request.get_data(True, True, False)
    return "Welcome " + str(name)


@app.route('/api/ConvertFile', methods=['POST'])
def file_converter():
    # Get file and save it to the temp folder
    file = request.files.get("file")
    temp_folder = os.path.join(app.root_path, app.config['TEMP_FOLDER_NAME'])
    filename = os.path.join(temp_folder, "dst_in.csv")

    # Create tmp folder if it doesn't exist
    directory = os.path.dirname(filename)
    if not os.path.exists(directory):
        os.makedirs(directory)

    file.save(filename)

    # Pass new filename to the convert function
    outfile = convert(filename, temp_folder)

    # Return file to the browser
    return send_file(outfile, mimetype="application/json")


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
