# Untitled Book API

> Welcome to my Untitled Book API, a great resource for querying books from a defined database.

# Installation
First, install all necessary node modules
```
npm install
npm start
```

> **Keep in mind that all requests must be made by [Postman](https://www.postman.com/)**
# Routes
Here is a sample route for a book in the database
<br>
```/the-da-vinci-code ```

And the sample output:
```


{
    'book': 'The Da Vinci Code',
    'author': 'Dan Brown',
    'genre': 'fiction',
    'pub_year': '2003',
    'rating': '3.84',
    'page_count: '689',
    },
}


```

## Get Single Book
Send a GET request to https://vbookapi.herokuapp.com/title/(book title)

Sample data output will look like:
```
[
    "title": "War and Peace",
    "author": "Leo Tolstoy",
    "pubYear": "1865",
    "rating": 5,
    "pageCount": 1225,
    },
]
```

## Add a Book
Send a POST request to https://vbookapi.herokuapp.com/add/book

Sample data output will look like:
```
[
    "addition: ": "great success",
    "book: ": {
        "title": "The Jungle",
        "author": "Upton Sinclair",
        "pubYear": "1905",
        "rating": 5,
        "pageCount": 475,
    }
]
```

## Update a Book
Send a PUT request to https://vbookapi.herokuapp.com/update/book

Sample data output will look like:

```
[
    "update: ": "great success",
    "book updated: ": {
        "title": "War and Peace",
        "author": "Leo Tolstoy",
        "pubYear": "1865",
        "rating": 5,
        "pageCount": 1225,
    }
]
```

## Delete a Book
Send a DELETE request to https://vbookapi.herokuapp.com/delete/title/(book-title)

Sample data output will look like:
```
[
    {
        "removal:": "great success"
    }
]
```

## Signing Up
Send a POST request to https://vbookapi.herokuapp.com/auth/sign-up

User input will look like:
```
[
    {
        username: your-username
        password: your-password
    }
]
```

## Login
Send a POST request to https://vbookapi.herokuapp.com/auth/login

Output will look like:
```
[
    "login:": "great success",
    "user-signed-in:": {
        "username": "vladyslav",
        "password": "ENCRYPTED-PASSWORD"
    }
]
```