from flask import Flask, Response, request, render_template, jsonify
from dotenv import load_dotenv
import os

load_dotenv()

kakao_map_api_key = os.getenv("KAKAO_MAP_API_KEY")

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')


@app.route('/company', methods=['GET', 'POST'])
def company():
    return render_template('company.html')


@app.route('/business', methods=['GET', 'POST'])
def business():
    return render_template('business.html')


@app.route('/contact', methods=['GET', 'POST'])
def contact():
    return render_template('contact.html', kakao_map_api_key=kakao_map_api_key)


if __name__ == '__main__':
    # 배포 시에 debug=False, host='0.0.0.0', port=80
    app.run(debug=True)
