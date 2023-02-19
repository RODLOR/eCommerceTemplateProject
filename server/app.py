from config import config
from flask import Flask, jsonify
import pymysql

app = Flask(__name__)

conn = pymysql.connect(
    host='localhost',
    user='root',
    password='1234',
    database='ecommerce_data'
)


@app.route('/')
def index():
    try:
        cursor = conn.cursor()
        cursor.execute('select * from users')
        data = []
        data.append(cursor.fetchall())
        conn.close()
        return str(data)
    except Exception as ex:
        return 'error'


@app.route('/sign-up')
def sign_in():
    try:
        cursor = conn.cursor()
        return 'ok'
    except Exception:
        return 'error'


@app.route('/login')
def log_in():
    try:
        return 'ok'
    except Exception:
        return 'error'


def not_found(err):
    return 'error'


if __name__ == '__main__':
    app.config.from_object(config['development'])
    app.register_error_handler(404, not_found)
    app.run()
