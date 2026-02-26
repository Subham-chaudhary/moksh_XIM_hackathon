import sqlite3
from flask import Flask, request, jsonify

app = Flask(__name__)
DATABASE = 'model/database2.db'

def get_db_connection():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/init_db', methods=['GET'])
def init_db():
    conn = get_db_connection()
    
    # Registered titles dataset
    conn.execute('CREATE TABLE IF NOT EXISTS prgi_registered_titles (id INTEGER PRIMARY KEY AUTOINCREMENT, Title TEXT NOT NULL, Registration_Number TEXT NOT NULL,Registration_Date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, Language TEXT NOT NULL, Periodicity TEXT NOT NULL , Publisher TEXT NOT NULL, Owner TEXT NOT NULL, Publication_State TEXT NOT NULL, Publication_District TEXT NOT NULL)')
    conn.commit()

    # Cancelled titles dataset
    conn.execute('CREATE TABLE IF NOT EXISTS prgi_cancelled_titles (id INTEGER PRIMARY KEY AUTOINCREMENT, Title TEXT NOT NULL, Registration_Number TEXT NOT NULL, Language TEXT NOT NULL, Periodicity TEXT NOT NULL,State TEXT NOT NULL, District TEXT NOT NULL, Owner TEXT NOT NULL,Publisher TEXT NOT NULL)')
    conn.commit()

    # Defunt titles dataset
    conn.execute('CREATE TABLE IF NOT EXISTS prgi_defunct_titles (id INTEGER PRIMARY KEY AUTOINCREMENT, Title TEXT NOT NULL, Registration_Number TEXT NOT NULL, Owner TEXT NOT NULL, Publisher TEXT NOT NULL, Language TEXT NOT NULL, Periodicity TEXT NOT NULL,State TEXT NOT NULL, District TEXT NOT NULL)')
    conn.commit()
    conn.close()

    return jsonify({"message": "Table created successfully!"})

@app.route('/add', methods=['GET', 'POST'])
def add_user():
    if request.method == 'POST':
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
    else:
        name = request.args.get('name')
        email = request.args.get('email')

    if not name or not email:
        return jsonify({"error": "Name and email are required"}), 400

    conn = get_db_connection()
    conn.execute('INSERT INTO users (name, email) VALUES (?, ?)', (name, email))
    conn.commit()
    conn.close()
    return jsonify({"message": f"User {name} added successfully!"})

@app.route('/list')
def list_users():
    conn = get_db_connection()
    users = conn.execute('SELECT * FROM users').fetchall()
    conn.close()
    
    # user_list = []
    # for user in users:
    #     user_list.append({"id": user['id'], "name": user['name'], "email": user['email']})
    
    return jsonify([dict(user) for user in users])

if __name__ == '__main__':
    app.run(debug=True, port=5000)
