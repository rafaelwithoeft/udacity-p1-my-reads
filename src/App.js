import React, { Component } from 'react'

import NavBar from './components/NavBar'
import BookShelf from './components/Book/BookShelf'

class App extends Component {
    render() {
    	return (
			<div className="app">
				<NavBar />
				<div className="container-fluid">
					<BookShelf />
				</div>
			</div>
		);
    }
}

export default App;