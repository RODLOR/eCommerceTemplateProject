import pymysql
class development_config():
    DEBUG = True



config = {
    'development': development_config
}

conn = pymysql.connect(
    host='localhost',
    user='root',
    password='1234',
    database='ecommerce_data'
)