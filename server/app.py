from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from pymongo import MongoClient
from bson import ObjectId

app = Flask(__name__)
CORS(app)

# connect to mongo database
try:
    client = MongoClient('mongodb://127.0.0.1:27017/')
    db = client['bookstore']
    collection = db['books']
    print("Connected to database successfully!")
except:
    print("Could not connect to MongoDB")


@app.route('/createbooks', methods=['POST'])
def create_book():
    if request.method == 'POST':
        book_data = request.get_json()
        res = collection.insert_one(book_data)
        inserted_id = str(res.inserted_id)
        return jsonify({'message': 'Book created successfully!', 'status': 200, 'response': inserted_id})

@app.route('/getbooks', methods=['GET'])
def get_books():
    if request.method == 'GET':
        books = list(collection.find())
        for book in books:
            book['_id'] = str(book['_id'])
        return jsonify({'status': 200, 'data': books})
    else:
        return jsonify({'message': 'Method not allowed', 'status': 400})

@app.route('/getbook/<id>', methods=['GET'])
def get_book(id):
    if request.method == 'GET':
        book = collection.find_one({'_id': ObjectId(id)})
        if book:
            book['_id'] = str(book['_id'])
            return jsonify({'message': 'Book found', 'status': 200, 'data': book})
        else:
            return jsonify({'message': 'Book not found', 'status': 404})
    else:
        return jsonify({'message': 'Method not allowed', 'status': 400})

@app.route('/updatebook/<id>', methods=['PUT'])
def update_book(id):
    if request.method == 'PUT':
        book_data = request.get_json()
        collection.update_one({'_id': ObjectId(id)}, {'$set': book_data})
        return jsonify({'message': 'Book updated successfully!', 'status': 200})
    else:
        return jsonify({'message': 'Method not allowed', 'status': 400})

@app.route('/deletebook/<id>', methods=['DELETE'])
def delete_book(id):
    if request.method == 'DELETE':
        collection.delete_one({'_id': ObjectId(id)})
        return jsonify({'message': 'Book deleted successfully!', 'status': 200})
    else:
        return jsonify({'message': 'Method not allowed', 'status': 400})


if __name__ == '__main__':
    app.run(debug=True)
