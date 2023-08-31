import sqlite3

# Ma'lumotlar bazasini yaratish yoki bog'lash
conn = sqlite3.connect('data.db')
cursor = conn.cursor()

# Jadvalni yaratish
cursor.execute('''
    CREATE TABLE IF NOT EXISTS responses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_input TEXT,
        bot_input TEXT
    )
''')

# Yangi jadval yaratilgan ma'lumotlar bazasini saqlash
conn.commit()

# Ma'lumotlar bazasini yopish
conn.close()
