# MyReads Project

MyReads is a project from React Developer Nanodegree.
Built on top of the starter template.

### Some features added to project, like:

- Bootstrap 4;
- Loading state for shelves and search;
- Tests;

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`
* launches tests `npm test`

## What You're Getting
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # Book Icon.
│   └── index.html
└── src
    ├── components # Components folder.
    |   ├── __tests__ # Tests for common components.
    |   |   ├── Alert.test.js # Tests for <Alert /> component.
    |   |   ├── Badge.test.js # Tests for <Badge /> component.
    |   |   ├── Loading.test.js # Tests for <Loading /> component.
    |   |   └── NavBar.test.js # Tests for <NavBar /> component.
    │   ├── Books # Book's components.
    |   |   ├── __tests__ # Tests for book components.
    |   |   |   ├── Book.test.js # Tests for <Book /> component.
    |   |   |   ├── BookList.test.js # Tests for <BookList /> component.
    |   |   |   ├── BookSearch.test.js # Tests for <BookSearch /> component.
    |   |   |   └── BookShelf.test.js # Tests for <BookShelf /> component.
    |   |   ├── Book.js # <Book /> component. Render individual book.
    |   |   ├── BookList.js # <BookList /> component. Render a list of books.
    |   |   ├── BookSearch.js # <BookSearch /> component. Render input and BookList component after successfull search.
    |   |   └── BookShelf.js # <BookShelf /> component. Render BookSearch or BookList with three shelfs.
    │   ├── Alert.js # <Alert /> component. Render alert div with a message and badge (if declarated).
    │   ├── Badge.js # <Badge /> component.
    │   ├── Loading.js # <Loading /> component. Render loading image.
    │   └── Navbar.js # <NavBar /> component. Render navigation bar.
    ├── icons # Helpful icons.
    │   └── loading.svg
    ├── utils
    |   ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    |   └── custom.css # Define custom class for aplcation.
    ├── App.js # <App /> component. Start rendering bookshelf.
    ├── App.test.js # Tests for <App /> component.
    ├── index.js # ReactDOM root render.
    └── setupTests.js # Configure enzyme.
```

## Backend Server

Udacity provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/utils/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query, maxResults)
```

* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
