import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Book from './Book'
import Alert from '../Alert'
import Loading from '../Loading'

class BookList extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        onSelectShelf: PropTypes.func.isRequired,
        loading: PropTypes.bool.isRequired
    }

    render() {
        const { name, books, onSelectShelf, loading } = this.props;

        return (
            <div className="book-list">
                <Alert message={name} messageBadge={books.length} classAlert="alert alert-primary" />
                
                {loading && <Loading />}
                {
                    loading === false && 
                    <div className="row justify-content-md-center">
                        {books.map((book) => (
                            <Book key={book.id} book={book} onSelectShelf={onSelectShelf} />
                        ))}
                    </div>
                }
            </div>
        );
    }
}

export default BookList;