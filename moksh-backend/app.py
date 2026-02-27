from flask import Flask, request, jsonify
import psycopg2, psycopg2.extras
import sqlite3
import os
import model.embed_llama as ollama
import phoneba as ph



app = Flask(__name__)
DATABASE = 'model/database2.db'
def get_db_connection():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

def get_psql_connection():
    conn = psycopg2.connect(
        host=os.getenv('host', 'ep-old-night-a15sm9m8-pooler.ap-southeast-1.aws.neon.tech'),
        database=os.getenv('database', 'neondb'),
        user=os.getenv('user', 'neondb_owner'),
        password=os.getenv('password', 'npg_wEMTpa4n6xKr')
    )
    return conn

@app.route('/registered', methods=['GET'])
def registered():

    conn = get_db_connection()
    cur = conn.cursor()

    try:
        limit = int(request.args.get("limit", 10))
    except:
        limit = 10

    limit = max(1, min(limit, 100))

    max_rows = cur.execute("SELECT COUNT(*) FROM prgi_registered_titles").fetchone()[0]
    max_pages = (max_rows + limit - 1) // limit


    try:
        page = int(request.args.get("page", 1))
    except:
        page = 1

    page = max(1, min(page, max_pages))

    offset = (page - 1) * limit
    
    title = request.args.get("title")
    rnum = request.args.get("rnum")
    owner = request.args.get("owner")
    publisher = request.args.get("publisher")
    publication_state = request.args.get("publication_state")
    publication_district = request.args.get("publication_district")
    language = request.args.get("language")

    query = "SELECT * FROM prgi_registered_titles WHERE 1=1"
    params = []
    if title: query += " AND title LIKE ?"; params.append(f"{title}")
    if rnum: query += " AND registration_number LIKE ?"; params.append(f"{rnum}")
    if owner: query += " AND owner LIKE ?"; params.append(f"{owner}")
    if publisher: query += " AND publisher LIKE ?"; params.append(f"{publisher}")
    if publication_state: query += " AND publication_state LIKE ?"; params.append(f"{publication_state}")
    if publication_district: query += " AND publication_district LIKE ?"; params.append(f"{publication_district}")
    if language: query += " AND language LIKE ?"; params.append(f"{language}")
    query += " LIMIT ? OFFSET ?"
    params.extend([limit, (page - 1) * limit])

    print(query, params)
    cur.execute(query, params)

    columns = [desc[0] for desc in cur.description]
    rows = cur.fetchall()

    result = [dict(zip(columns, row)) for row in rows]

    cur.close()
    conn.close()

    return jsonify({"page": page,
        "limit": limit,
        "total_rows": max_rows,
        "total_pages": max_pages,
        "data": result})

@app.route('/cancelled', methods=['GET'])
def cancelled():

    conn = get_db_connection()
    cur = conn.cursor()

    try:
        limit = int(request.args.get("limit", 10))
    except:
        limit = 10

    limit = max(1, min(limit, 100))

    max_rows = cur.execute("SELECT COUNT(*) FROM prgi_cancelled_titles").fetchone()[0]
    max_pages = (max_rows + limit - 1) // limit


    try:
        page = int(request.args.get("page", 1))
    except:
        page = 1

    page = max(1, min(page, max_pages))

    offset = (page - 1) * limit
    
    title = request.args.get("title")
    rnum = request.args.get("rnum")
    language = request.args.get("language")

    query = "SELECT * FROM prgi_cancelled_titles WHERE 1=1"
    params = []
    if title: query += " AND title LIKE ?"; params.append(f"{title}")
    if rnum: query += " AND registration_number LIKE ?"; params.append(f"{rnum}")
    if language: query += " AND language LIKE ?"; params.append(f"{language}")
    query += " LIMIT ? OFFSET ?"
    params.extend([limit, (page - 1) * limit])

    print(query, params)
    cur.execute(query, params)

    columns = [desc[0] for desc in cur.description]
    rows = cur.fetchall()

    result = [dict(zip(columns, row)) for row in rows]

    cur.close()
    conn.close()

    return jsonify({"page": page,
        "limit": limit,
        "total_rows": max_rows,
        "total_pages": max_pages,
        "data": result})

@app.route('/defunct', methods=['GET'])
def defunct():

    conn = get_db_connection()
    cur = conn.cursor()

    try:
        limit = int(request.args.get("limit", 10))
    except:
        limit = 10

    limit = max(1, min(limit, 100))

    max_rows = cur.execute("SELECT COUNT(*) FROM prgi_defunct_titles").fetchone()[0]
    max_pages = (max_rows + limit - 1) // limit


    try:
        page = int(request.args.get("page", 1))
    except:
        page = 1

    page = max(1, min(page, max_pages))

    offset = (page - 1) * limit
    
    title = request.args.get("title")
    rnum = request.args.get("rnum")
    owner = request.args.get("owner")
    publisher = request.args.get("publisher")
    publication_state = request.args.get("publication_state")
    publication_district = request.args.get("publication_district")
    language = request.args.get("language")

    query = "SELECT * FROM prgi_defunct_titles WHERE 1=1"
    params = []
    if title: query += " AND title LIKE ?"; params.append(f"{title}")
    if rnum: query += " AND registration_number LIKE ?"; params.append(f"{rnum}")
    if owner: query += " AND owner LIKE ?"; params.append(f"{owner}")
    if publisher: query += " AND publisher LIKE ?"; params.append(f"{publisher}")
    if publication_state: query += " AND state LIKE ?"; params.append(f"{publication_state}")
    if publication_district: query += " AND district LIKE ?"; params.append(f"{publication_district}")
    if language: query += " AND language LIKE ?"; params.append(f"{language}")
    query += " LIMIT ? OFFSET ?"
    params.extend([limit, (page - 1) * limit])

    print(query, params)
    cur.execute(query, params)

    columns = [desc[0] for desc in cur.description]
    rows = cur.fetchall()

    result = [dict(zip(columns, row)) for row in rows]

    cur.close()
    conn.close()

    return jsonify({"page": page,
        "limit": limit,
        "total_rows": max_rows,
        "total_pages": max_pages,
        "data": result})

def fuzzy_search(title):
    conn = get_psql_connection()
    cur = conn.cursor()
    # cur.execute("SELECT title,registration_number, similarity(title, %s) AS score FROM prgi_semantic_titles WHERE title %s ORDER BY score DESC LIMIT 10;", (title, title))
    query = f"SELECT title, registration_number, similarity(title, '{title}') AS score FROM prgi_semantic_titles where title % '{title}' ORDER BY score DESC limit 10;"
    cur.execute(query)
    results = cur.fetchall()
    cur.close()
    # for result in results:
    #     print(result)
    return results

def schematic_search(title):
    query_vector = ollama.embed(title).get("embeddings")
    # print(query_vector)
    conn = get_psql_connection()
    cur = conn.cursor()
    query = f"SELECT title, registration_number, 1 - (embedding <=> '{query_vector[0]}') AS similarity FROM prgi_semantic_titles ORDER BY embedding <=> '{query_vector[0]}' ASC LIMIT 10;"
    cur.execute(query)
    results = cur.fetchall()
    cur.close()
    # for result in results:
    #     print(result)
    return results

def phoneatic_search(title, titles_list):
    results = ph.convert_to_ipa(title, titles_list)
    return results
    


# @app.route('/registertitle', methods=['POST'])
# def register_title():
    
    



if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
    # print(fuzzy_search("child"))
    # print(schematic_search("Child"))
    # print(phonetic)