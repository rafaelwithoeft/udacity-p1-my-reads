import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        onSelectShelf: PropTypes.func.isRequired
    }

    render() {
        const { book, onSelectShelf } = this.props;

        return (
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-2 mt-2">
                <div className="card border-black text-center">
                    <div className="card-header text-right">
                        <select defaultValue={book.shelf} className="form-control" onChange={(event) => onSelectShelf(book, event.target.value)}>
                            <option value="none">None</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="read">Read</option>
                        </select>
                    </div>
                    <div className="card-body">
                        {typeof book.imageLinks !== typeof undefined && typeof book.imageLinks !== typeof undefined && (
                            <img className="card-img-top img-fluid mx-auto d-block mt-2" src={book.imageLinks.smallThumbnail} alt="Book Thumbnail" style={{width: 140, height: 200}}/>
                        )}
                    </div>
                    <div className="card-footer">
                        <h5 className="card-title card-text">{book.title}</h5>
                        <p className="card-text text-muted">
                            {typeof book.authors !== typeof undefined && book.authors.length !== 0 && book.authors.join(" - ")}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Book