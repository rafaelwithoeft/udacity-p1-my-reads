import React, { Component } from 'react';
import { Debounce } from 'react-throttle';
import PropTypes from 'prop-types';
import sortBy from 'sort-by';

import BookList from './BookList';
import * as BooksAPI from '../../utils/BooksAPI';

class BookSearch extends Component {
    static propTypes = {
        booksOnShelf: PropTypes.array.isRequired,
        onSelectShelf: PropTypes.func.isRequired
    }

    state = {
        booksSearch: []
    }

    /*
    * When input search changes
    */
    onSearchChange = (query) => {
        this.setState({ loading: true });
        BooksAPI.search(query).then((resultSearch) => {
            let books = typeof resultSearch.error === typeof undefined && resultSearch.length > 0 ? resultSearch : [];
            this.setState({ booksSearch: books, loading: false });
        }).catch((error) => {
            this.setState({ booksSearch: [], loading: false });
        });
    }

    render() {
        const { booksSearch, loading } = this.state;
        const { booksOnShelf, onSelectShelf } = this.props;

        //Verify if searched books are listed on our shelf and identify it with a shelf.
        booksSearch.map((bookSearch) => {
            let bookShelf = booksOnShelf.find(b => b.id === bookSearch.id);
            if (typeof bookShelf !== typeof undefined) {
                bookSearch.shelf = bookShelf.shelf;
            }

            return bookSearch;
        });
        
        booksSearch.sort(sortBy('title'));

        return (
            <div className="book-search-root">
                <div className="row mt-3">
                    <div className="col-sm-12">
                        <Debounce time="500" handler="onChange">
                            <input 
                                className='form-control'
                                type='text'
                                placeholder='Search books'
                                name="input-search-book"
                                autoFocus
                                onChange={(event) => this.onSearchChange(event.target.value)}
                            />
                        </Debounce>
                    </div>
                </div>
                {
                    //loading state is setted only on search input change.
                    typeof loading !== typeof undefined  &&
                    <BookList name="Results" books={booksSearch} onSelectShelf={onSelectShelf} loading={loading} />
                }                                
            </div>
        )
    }
}

export default BookSearch;