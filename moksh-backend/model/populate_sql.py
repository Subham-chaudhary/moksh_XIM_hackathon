import psycopg2, psycopg2.extras
import sqlite3
import os
import embed_llama as ollama
from datetime import datetime

conn_psql = psycopg2.connect(
    host=os.getenv('host', 'ep-old-night-a15sm9m8-pooler.ap-southeast-1.aws.neon.tech'),
    database=os.getenv('database', 'neondb'),
    user=os.getenv('user', 'neondb_owner'),
    password=os.getenv('password', 'npg_wEMTpa4n6xKr')
)

conn_sqlite = sqlite3.connect('database2.db')
conn_sqlite.row_factory = sqlite3.Row

cur_psql = conn_psql.cursor()
cur_sqlite = conn_sqlite.cursor()

# cur_sqlite.execute(
#     "SELECT * FROM prgi_registered_titles;"
# )
# cur_sqlite.execute(
#     "SELECT * FROM prgi_cancelled_titles;"
# )

registered_titles_rows = cur_sqlite.execute("SELECT * FROM prgi_defunct_titles").fetchall()
all = len(registered_titles_rows)
print("Registered Titles:", len(registered_titles_rows))
count = 1
for row in registered_titles_rows:
    # row = list(dictionary)
    # embedding = ollama.embed(row[1])
    # print(type(list(embedding)))
    # print(list(embedding))
    # break

    # if row[3] is '':
    #     continue

    # cur_psql.execute("INSERT INTO prgi_semantic_titles (title, registration_Number,tag,registration_date, language, periodicity, publisher, owner, publication_state, publication_district, embedding) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)", [row[1], row[2], 'registered',datetime.strptime(row[3], '%d-%m-%Y') , row[4], row[5], row[6], row[7], row[8], row[9], ollama.embed(row[1]).get('embeddings')[0]])

    # cur_psql.execute("INSERT INTO prgi_semantic_titles (title, registration_Number,tag, language, periodicity, publisher, owner, publication_state, publication_district, embedding) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)", [row[1], row[2], 'cancelled', row[3], row[4], row[8], row[7], row[5], row[6], ollama.embed(row[1]).get('embeddings')[0]])

    cur_psql.execute("INSERT INTO prgi_semantic_titles (title, registration_Number,tag, language, periodicity, publisher, owner, publication_state, publication_district, embedding) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)", [row[1], row[2], 'defunct',  row[5], row[6], row[4], row[3], row[7], row[8], ollama.embed(row[1]).get('embeddings')[0]])
    print(f"Inserted {count} of {all} defunct titles")
    count += 1
    if count % 50 == 0:
        conn_psql.commit()

conn_psql.commit()


conn_psql.close()
conn_sqlite.close()