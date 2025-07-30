from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Example API route
@app.route('/api/hello')
def hello_api():
    return jsonify(message="Hello from Flask API!")

# Add more API routes as needed...

if __name__ == "__main__":
    app.run(debug=True)
