import sqlite3

DATABASE = 'database2.db'

conn = sqlite3.connect(DATABASE)
conn.row_factory = sqlite3.Row
count = 1

# with open('datasets/registered_data.csv', 'r') as file:
#     for line in file:
#         # if len(line.strip().split(',')) != 9:
#         #     continue
#         title, registration_number, registration_date, language, periodicity, publisher, owner, publication_state, publication_district = line.strip().split(',')
#         # print(title, registration_number, registration_date, language, 
#         # periodicity, publisher, owner, publication_state, publication_district)
#         conn.execute('INSERT INTO prgi_registered_titles (Title, Registration_Number, Registration_Date, Language, Periodicity, Publisher, Owner, Publication_State, Publication_District) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', 
#                         (title, registration_number, registration_date, language, periodicity, publisher, owner, publication_state, publication_district))
#         count += 1
#         print(f"Inserted {count} records into prgi_registered_titles")
#         if count % 10 == 0:
#             conn.commit()

# print(f"Total records inserted into prgi_registered_titles: {count}")
# conn.commit()
# conn.close()


# with open('datasets/defunct_data.csv', 'r') as file:
#     for line in file:
#         title, registration_number,owner,publisher, language, periodicity, State, district = line.strip().split(',')
#         # print(title, registration_number,owner,publisher, language, periodicity, State, publication_district)
#         conn.execute('INSERT INTO prgi_defunct_titles (Title, Registration_Number, Owner,Publisher, Language, Periodicity,State, District) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', 
#                         (title, registration_number,owner,publisher, language, periodicity, State, district))
#         count += 1
#         print(f"Inserted {count} records into prgi_defunct_titles")
#         if count % 10 == 0:
#             conn.commit()

# print(f"Total records inserted into prgi_defunct_titles: {count}")
# conn.commit()
# conn.close()

#drop table prgi_registered_titles;

# conn.execute('drop table prgi_registered_titles;')
# conn.commit()
# conn.close()


# for cancelled
with open('datasets/cancelled_data.csv', 'r') as file:
    for line in file:
        if len(line.strip().split(',')) != 8:
            continue
        title, registration_number, language, periodicity, state, district, owner, publisher = line.strip().split(',')
        # print(title, registration_number, registration_date, language, 
        # periodicity, publisher, owner, publication_state, publication_district)
        conn.execute('INSERT INTO prgi_cancelled_titles (Title, Registration_Number, Language, Periodicity, State, District, Owner, Publisher) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', 
                        (title, registration_number, language, periodicity, state, district, owner, publisher))
        count += 1
        print(f"Inserted {count} records into prgi_cancelled_titles")
        if count % 10 == 0:
            conn.commit()

print(f"Total records inserted into prgi_cancelled_titles: {count}")
conn.commit()
conn.close()