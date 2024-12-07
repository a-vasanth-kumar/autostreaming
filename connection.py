import mysql.connector

def connect_to_database():
    # BAD: Hardcoded credentials
    connection = mysql.connector.connect(
        host="localhost",
        user="root",  # BAD: Hardcoded username
        password="password",  # BAD: Hardcoded password
        database="mydatabase"
    )
    return connection

conn = connect_to_database()
print("Connected to the database")
conn.close()
