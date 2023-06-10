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


# Here are some shots of result

1. Home page (Shop for clients which displays all books)
![image](https://github.com/Govind-Deshmukh/Books-Library/assets/86681426/bffc9ac0-7b4d-4027-bc3a-97ba755bd0c0)

2. Search for books 
![image](https://github.com/Govind-Deshmukh/Books-Library/assets/86681426/0ec12538-c596-4009-8319-ea4de1b2a1b7)

3. View Book details
![image](https://github.com/Govind-Deshmukh/Books-Library/assets/86681426/6f38e082-2c57-43ab-b063-c75f75e66b06)

5. Admin home page (on admin home page lists all books available in database)
![image](https://github.com/Govind-Deshmukh/Books-Library/assets/86681426/db16dde6-9952-44f7-9846-3c95699c8527)

6. Create book (insert new book data to database)
![image](https://github.com/Govind-Deshmukh/Books-Library/assets/86681426/d7fa013d-1de5-4d93-82df-0b4d4bedb7a6)

7. Update book (Update existing book details)
![image](https://github.com/Govind-Deshmukh/Books-Library/assets/86681426/80447c2b-755c-40de-8ea6-eeff0ab2fed7)

