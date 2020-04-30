# Untitled Book API

> Welcome to my Untitled Book API, a great resource for querying a specific book genre, and getting a random book stats in that category.

# Installation
First, install all necessary node modules
```
npm install
npm start
```

# Routes
Here is a sample route for a book in the fiction genre
<br>
```/bookdb/{genre=fiction} ```

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

