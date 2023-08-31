from flask import Flask, render_template, request
import sqlite3


app = Flask(__name__)

# Ertakchi sahifa
@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        user_input = request.form['user_input']
        bot_input = request.form['bot_input']

        conn = sqlite3.connect('data.db')
        cursor = conn.cursor()
        cursor.execute('INSERT INTO responses (user_input, bot_input) VALUES (?, ?)', (user_input, bot_input))
        conn.commit()
        conn.close()
    return render_template('index.html')


# Ma'lumotlarni ko'rish sahifasi
@app.route('/data', methods=['GET'])
def get_data():
    conn = sqlite3.connect('data.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM responses')
    data = cursor.fetchall()
    conn.close()

    return render_template('data.html', data=data)


@app.route('/data/<id>', methods=['get'])
def delete_data(id):
    print(id)
    conn = sqlite3.connect('data.db')
    cursor = conn.cursor()
    cursor.execute('DELETE FROM responses WHERE id = ?', (id,))
    conn.commit()
    conn.close()
    return "",204
if __name__ == '__main__':
    app.run(debug=True)
