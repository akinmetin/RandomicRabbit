from flask import Flask, jsonify, render_template
import random

app = Flask(__name__)


@app.route("/GetRandom", methods=['GET'])
def randomer():
    response = jsonify({'number': str(random.randint(1, 2000))})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0')
