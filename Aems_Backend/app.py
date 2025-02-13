from email.mime.text import MIMEText
from flask import Flask, request, jsonify, render_template, redirect, url_for, session
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})
app.secret_key = 'your_secret_key_here'


def fetch_user(username, password, role):
    connection = sqlite3.connect('users.db')
    cursor = connection.cursor()
    cursor.execute("SELECT username, password, role FROM users WHERE username = ? AND password = ? AND role = ?", (username, password, role))
    user = cursor.fetchone()
    connection.close()
    return user

def test():
    connection = sqlite3.connect('users.db')
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM users")
    users = cursor.fetchall()
    connection.close()
    return users


# Route to serve the login page
@app.route('/')
def index():
    return render_template('index.html')


@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    role = data.get('role')  # Get the role from the dropdown

    # Fetch the user from the database based on the role
    user = fetch_user(username, password, role)

    if user:
        # Store user information in the session
        session['username'] = user[0]  # username
        session['role'] = user[2]  # role
        return jsonify({'success': True})
    else:
        return jsonify({'success': False})


@app.route('/home')
def home():
    role = session.get('role')  # Fetch the role from the session
    return render_template('home.html', role=role)


# Route to display the form to add a new user (admin-only access)
@app.route('/adduser', methods=['GET', 'POST'])
def add_user():
    role = session.get('role')

    if role != 'Admin':
        return redirect(url_for('home'))  # Redirect non-admins to the home page

    if request.method == 'POST':
        data = request.form
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')

        # Add user to the database with the 'User' role
        connection = sqlite3.connect('users.db')
        cursor = connection.cursor()
        cursor.execute("INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)", (username, email, password, 'User'))
        connection.commit()
        connection.close()

        return redirect(url_for('home'))  # Redirect back to the home page after successful user creation

    return render_template('add_user.html')


# Route to display the signup form
@app.route('/signup', methods=['GET', 'POST'])
def signup():
    print(test())
    if request.method == 'POST':
        data = request.form
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')

        # Add user to the database with the 'User' role
        connection = sqlite3.connect('users.db')
        cursor = connection.cursor()
        cursor.execute("INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)", (username, email, password, 'User'))
        connection.commit()
        connection.close()

        return redirect(url_for('index'))  # Redirect to the login page

    return render_template('signup.html')


# Route to fetch all artists
@app.route('/artists', methods=['GET'])
def get_artists():
    connection = sqlite3.connect('users.db')
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM artists")
    rows = cursor.fetchall()
    connection.close()

    # Convert each row (tuple) to a dictionary with the appropriate keys
    artists = [
        {
            "artist_id": row[0],
            "name": row[1],
            "genre": row[2],
            "debut_year": row[3],
            "picture_url": row[4]
        }
        for row in rows
    ]

    # Return the list of artist dictionaries as JSON
    return jsonify({'artists': artists})


# Route to fetch all artworks
@app.route('/artworks', methods=['GET'])
def get_artworks():
    connection = sqlite3.connect('users.db')
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM artworks")
    rows = cursor.fetchall()
    connection.close()

    # Convert each row (tuple) to a dictionary with appropriate keys
    artworks = [
        {
            "artist_id": row[0],
            "exhibition_id": row[1],
            "image_url": row[2],
            "price": row[3]
        }
        for row in rows
    ]

    # Return the list of artworks as JSON
    return jsonify({'artworks': artworks})


# Route to fetch all exhibitions
@app.route('/exhibitions', methods=['GET'])
def get_exhibitions():
    connection = sqlite3.connect('users.db')
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM exhibitions")
    rows = cursor.fetchall()
    connection.close()

    # Convert each row (tuple) to a dictionary with appropriate keys
    exhibitions = [
        {
            "exhibition_id": row[0],
            "title": row[1],
            "start_date": row[2],
            "end_date": row[3],
            "location": row[4]
        }
        for row in rows
    ]

    # Return the list of exhibitions as JSON
    return jsonify({'exhibitions': exhibitions})


# Route to fetch a specific artist by ID
@app.route('/artist/<int:artist_id>', methods=['GET'])
def get_artist_by_id(artist_id):
    connection = sqlite3.connect('users.db')
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM artists WHERE artist_id = ?", (artist_id,))
    row = cursor.fetchone()
    connection.close()

    if row:
        artist = {
            "artist_id": row[0],
            "name": row[1],
            "genre": row[2],
            "debut_year": row[3],
            "picture_url": row[4]
        }
        return jsonify({'artist': artist})
    else:
        return jsonify({'error': 'Artist not found'}), 404


# Route to fetch artworks by artist_id
@app.route('/artworks/artist/<int:artist_id>', methods=['GET'])
def get_artworks_by_artist(artist_id):
    connection = sqlite3.connect('users.db')
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM artworks WHERE artist_id = ?", (artist_id,))
    rows = cursor.fetchall()
    connection.close()

    # Convert each row (tuple) to a dictionary with appropriate keys
    artworks = [
        {
            "artist_id": row[0],
            "exhibition_id": row[1],
            "image_url": row[2],
            "price": row[3]
        }
        for row in rows
    ]

    # Return the list of artwork dictionaries as JSON
    return jsonify({'artworks': artworks})

@app.route('/send-email', methods=['POST'])
def send_email():
    data = request.get_json()

    # Email parameters
    sender_email = "your-email@gmail.com"
    receiver_email = "zsafi2@uic.edu"
    password = "your-email-password"  # This should be stored securely, never hard-coded

    # Compose email
    message = MIMEText(f"Message from {data['name']} ({data['email']}):\n\n{data['message']}")
    message["Subject"] = data["subject"]
    message["From"] = sender_email
    message["To"] = receiver_email

    try:
        # Setup the SMTP server
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(sender_email, password)
            server.sendmail(sender_email, receiver_email, message.as_string())

        return jsonify({"success": True}), 200
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"success": False, "error": str(e)}), 500



if __name__ == '__main__':
    app.run(debug=True, port=5001)
    
