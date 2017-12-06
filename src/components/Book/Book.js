import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
    const { book, onSelectShelf } = props;

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
                    {typeof book.imageLinks !== typeof undefined && typeof book.imageLinks.smallThumbnail !== typeof undefined && (
                        <img className="card-img-top img-fluid mx-auto d-block mt-2" src={book.imageLinks.smallThumbnail} alt="Book Thumbnail" style={{width: 140, height: 180}}/>
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
    );
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onSelectShelf: PropTypes.func.isRequired
}

export default Book;