import React from 'react';

import NavBar from './components/NavBar';
import BookShelf from './components/Book/BookShelf';

const App = () => (
	<div className="app">
		<NavBar />
		<div className="container-fluid">
			<BookShelf />
		</div>
	</div>
);

export default App;