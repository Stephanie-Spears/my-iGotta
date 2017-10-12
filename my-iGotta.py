from flask import Flask, render_template, abort
from jinja2 import Template

app = Flask(__name__)


class Bathroom:
    def __init__(self, key, name, lat, lng):
        self.key  = key
        self.name = name
        self.lat  = lat
        self.lng  = lng

#hardcoded bathrooms-->set into database instead
bathrooms = (
    Bathroom('TL',      'Thirsty Lion',   45.4910835, -122.897040),
    Bathroom('PSU', 'Portland State University',45.5110182, -122.6853723),
    Bathroom('PCC',     'Portland Community College', 45.4379353, -122.7341587)
)
#function
bathrooms_by_key = {bathroom.key: bathroom for bathroom in bathrooms}




@app.route('/')
def index():
    return render_template('index.html', title='index')


#make this the browse option? then this will link with being able to be clicked on below
@app.route('/bathroom-list')
def bathroomList():
    return render_template('bathroom-list.html', title='bathroom-list')

#sets the route to the specific bathroom clicked on, otherwise error
@app.route("/<bathroom_code>")
def show_bathroom(bathroom_code):
    bathroom = bathrooms_by_key.get(bathroom_code)
    if bathroom:
        return render_template('map.html', bathroom=bathroom)
    else:
        abort(404)

if __name__ == '__main__':
    app.run(host='localhost', debug=True)
