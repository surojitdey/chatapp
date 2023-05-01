
# Using flask to make an api
# import necessary libraries and functions
from flask import Flask, jsonify, request
from flask_cors import CORS
import json

# creating a Flask app
app = Flask(__name__)
CORS(app)

@app.route('/', methods = ['GET', 'POST'])
def chatbot():
    if(request.method == 'GET'):
        data = "hello world"
        return jsonify({'data': data})
    if(request.method == 'POST'):
        answer = ""
        message = request.get_json().get("message")
        if(message == "hello"):
            answer = "hello there"
        if(message == "how are you?"):
            answer = "I am fine. What about you?"
        
        response = jsonify({
            "answer": answer
        })
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

# driver function
if __name__ == '__main__':
    app.run(debug = True)
