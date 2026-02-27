from flask import Flask, request, jsonify
import psycopg2, psycopg2.extras
import sqlite3
import os
import model.embed_llama as ollama
import phoneba as ph
import string
import random

from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
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
    print(len(result))
    return jsonify({"page": page,
        "limit": limit,
        "total_rows": max_rows,
        "total_pages": max_pages,
        "result": result})

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
        "result": result})

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
        "result": result})

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
    

def evaluate(f_results, sch_results, p_results):
    F_Threshold = 0.4
    Sch_Threshold = 0.8
    P_Threshold = 0.5

    isTitleAvailable = True

    if f_results and f_results[0][2] >= F_Threshold:
        isTitleAvailable = False
    elif sch_results and sch_results[0][2] >= Sch_Threshold:
        isTitleAvailable = False
    elif p_results and p_results[0][3] >= P_Threshold:
        isTitleAvailable = False

    return isTitleAvailable

    print("F_results:", f_results)
    print("Sch_results:", sch_results)
    print("P_results:", p_results)


def getRandomNum():
    chars = string.ascii_letters + string.digits
    return ''.join(random.choice(chars) for _ in range(3))

@app.route('/registertitle', methods=['POST'])
def register_title():
    data = request.get_json()

    title = data.get("title")
    language = data.get("language")
    periodicity = data.get("periodicity")
    owner = data.get("owner")
    publisher = data.get("publisher")
    state = data.get("state")
    district = data.get("district")

    if not title or not owner:
        return jsonify({"error": "Missing required fields"}), 400

    fuzzy_results = fuzzy_search(title)
    schematic_search_results = schematic_search(title)
    phoneatic_search_results = phoneatic_search(title, [res[0] for res in fuzzy_results])

    isAvailable = evaluate(fuzzy_results, schematic_search_results, phoneatic_search_results)

    if not isAvailable:
        return jsonify({"error": "Title already exists",
        "results": {
            "fuzzy": fuzzy_results,
            "schematic": schematic_search_results,
            "phoneatic": phoneatic_search_results,
            "requested_data": data
        }}), 409
    
    lite_sql = get_db_connection()
    lite_cur = lite_sql.cursor()
    query = "INSERT INTO prgi_registered_titles (title, registration_number, language, periodicity, publisher, owner, publication_state, publication_district) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
    registration_number = getRandomNum()
    lite_cur.execute(query, (title, registration_number, language, periodicity, publisher, owner, state, district))
    
    
    conn = get_psql_connection()
    cur = conn.cursor()
    query = "INSERT INTO prgi_semantic_titles (title, registration_number,tag, language, periodicity,publisher, owner, publication_state, publication_district, embedding) VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
    # registration_number = getRandomNum()
    embedding = ollama.embed(title).get("embeddings")
    cur.execute(query, (title, registration_number, 'registered',language, periodicity, publisher, owner,state, district, embedding[0]))
    
    lite_sql.commit()
    lite_cur.close()
    lite_sql.close()
    conn.commit()
    cur.close()
    conn.close()

    return jsonify({
        "status": "success",
        "message": "Title registered successfully",
        "results": {
            "fuzzy": fuzzy_results,
            "schematic": schematic_search_results,
            "phoneatic": phoneatic_search_results,
            "requested_data": data
        }
    }), 200
    



if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
    # print(fuzzy_search("child"))
    # print(schematic_search("Child"))
    # print(phonetic)