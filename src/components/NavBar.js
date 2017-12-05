import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <h3 className="text-white">MyReads</h3>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMyReads" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-md-center" id="navbarMyReads">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/search">Search</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;