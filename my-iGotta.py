from flask import Flask, render_template
from jinja2 import Template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html', title='index')


if __name__ == '__main__':
    app.run()
