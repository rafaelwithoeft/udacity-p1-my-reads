import React, { Component } from 'react';
import PropTypes from 'prop-types'
import sortBy from 'sort-by'

import BookList from './BookList'
import * as BooksAPI from '../../utils/BooksAPI'

class BookSearch extends Component {
    static propTypes = {
        booksOnShelf: PropTypes.array.isRequired,
        onSelectShelf: PropTypes.func.isRequired
    }

    state = {
        searchQuery: [],
        booksSearch: []
    }

    /*
    * Event update query on every change of search input.
    */
    onSearchQueryChange = (query) => {
        this.setState({ searchQuery: query.trim() })
    }

    /*
    * When search button is clicked.
    */
    onSearchButtonClicked = () => {
        this.setState({ loading: true });
        BooksAPI.search(this.state.searchQuery, 20).then((resultSearch) => {
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
                    <div className="col-sm-10">
                        <input 
                            className='form-control'
                            type='text'
                            placeholder='Search books'
                            name="input-search-book"
                            autoFocus
                            onChange={(event) => this.onSearchQueryChange(event.target.value)}
                        />
                    </div>
                    <div className="col-sm-2">
                        <button type="button" className="btn btn-block btn-primary" onClick={this.onSearchButtonClicked}>Search</button>
                    </div>
                </div>
                {
                    typeof loading !== typeof undefined  &&
                    <BookList name="Results" books={booksSearch} onSelectShelf={onSelectShelf} loading={loading} />
                }                                
            </div>
        )
    }
}

export default BookSearch;