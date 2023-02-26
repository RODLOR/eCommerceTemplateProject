from config import config, conn
from flask import Flask, jsonify

app = Flask(__name__)


@app.route('/')
def index():
    try:
        conn.connect()
        cursor = conn.cursor()
        cursor.execute('select * from products')
        data = cursor.fetchall()
        conn.close()
        res = [dict(zip([key[0] for key in cursor.description], row))
               for row in data]
        return jsonify(res)
    except Exception as ex:
        conn.close()
        return 'error'


@app.route('/sign-up')
def sign_up():
    try:
        conn.connect()

        cursor = conn.cursor()
        data = ''
        res = jsonify()
        conn.close()
        res = [dict(zip([key[0] for key in cursor.description], row))
               for row in data]
        return res
    except Exception:
        conn.close()
        return 'error'


@app.route('/login')
def log_in():
    try:
        cursor = conn.cursor()
        cursor.execute('select * from products')
        data = cursor.fetchall()
        conn.close()
        products = [dict(zip([key[0] for key in cursor.description], row))
                    for row in data]
        return jsonify(products)
    except Exception as ex:
        return 'error'


def not_found(err):
    return 'error404'


if __name__ == '__main__':
    app.config.from_object(config['development'])
    app.register_error_handler(404, not_found)
    app.run()
