import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import sortBy from 'sort-by'

import BookSearch from './BookSearch'
import BookList from './BookList'
import * as BooksAPI from '../../utils/BooksAPI'

class BookShelf extends Component {
    state = {
        booksOnShelf: [],
        loading: true
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({booksOnShelf: books, loading: false});
		});
    }

    /*
    * 1 - When user search a book and click on add we check if exists on our book list and add it, if necessary;
    * 2 - If book exists on our shelf, we update it.
    * @see function onSelectShelf.
    */
    changeShelf = (books, book, newShelf) => {
        let bookInsideShelf = books.find(b => b.id === book.id);

        if (typeof bookInsideShelf === typeof undefined) {
            book.shelf = newShelf;
            books.push(book);
        } else {
            bookInsideShelf.shelf = newShelf;
        }
        
        return books;
    }

    /*
    * On user select a shelf from select input.
    * @see Book
    */
    onSelectShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => {   
            this.setState((prevState) => ({
                booksOnShelf: this.changeShelf(prevState.booksOnShelf, book, shelf)
            }));
        });
    }

    render() {
        const { booksOnShelf, loading } = this.state;
        booksOnShelf.sort(sortBy('title'));

        const booksCurrentlyReading = booksOnShelf.filter(book => book.shelf === "currentlyReading");
        const booksWantToRead = booksOnShelf.filter(book => book.shelf === "wantToRead");
        const booksRead = booksOnShelf.filter(book => book.shelf === "read");

        return (
            <div className="book-shelf-root">
                <Route exact path="/search" render={() => (
                    <BookSearch booksOnShelf={booksOnShelf} onSelectShelf={this.onSelectShelf} />
                )}/>
                <Route exact path="/" render={() => (
                    <div className="book-shelf-books">
                        <BookList name="Want to Read" books={booksWantToRead} onSelectShelf={this.onSelectShelf} loading={loading} />
                        <BookList name="Currently Reading" books={booksCurrentlyReading} onSelectShelf={this.onSelectShelf} loading={loading} />
                        <BookList name="Read" books={booksRead} onSelectShelf={this.onSelectShelf} loading={loading} />
                    </div>
                )}/>
            </div>
        )
    }
}

export default BookShelf;