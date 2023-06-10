# Bookstore Application

This is a Flask-React based bookstore webapp. It allows you to perform CRUD operations (Create, Read, Update, Delete) on books stored in a MongoDB database.
For UI and styling Bootstrap is used

## Prerequisites

- Python 3.x
- Nodejs
- MongoDB

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/Govind-Deshmukh/Books-Library.git
   ```

2. Create python env for flask server

   ```
   python -m virtualenv env
   ```

   if virtualenv not installed then

   ```
   pip install virtualenv
   ```

   for linux destros

   ```
   python3 -m virtualenv env
   ```

3. Install requirements for python

   ```
   pip install -r requirements.txt
   ```

4. Start python server
   For windows
   ```
   python app.py
   ```
   For Linux
   ```
   python3 app.py
   ```
5. Now change dir to client
   install npm packges

   ```
   npm i
   ```

6. Start node server
   run npm server

   ```
   npm start
   ```

7. Generate build
   generate build for deployment
   ```
   npm run build
   ```
