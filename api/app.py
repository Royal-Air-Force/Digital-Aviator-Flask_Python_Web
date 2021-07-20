from flask import Flask, redirect, url_for, render_template, request, flash, send_from_directory

import os
from os.path import join, dirname

import json
import time

# set the project root directory as the static folder, you can set others.
app = Flask(__name__, static_url_path='/static')

@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

# Put your other RESTful api endpoints here!


if __name__ == '__main__':
    app.run(host='0.0.0.0')