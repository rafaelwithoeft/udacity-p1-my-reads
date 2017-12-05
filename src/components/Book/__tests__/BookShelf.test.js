import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import BookShelf from '../BookShelf'

describe('<BookShelf /> Component', () => {
    let searchMounted,
        indexMounted,
        books = [{ id: 1, title: 'Book Test', shelf: 'read' }, { id: 2, title: 'Book Test 2', shelf: 'currentlyReading' }, { id: 3, title: 'Book Test 3', shelf: 'wantToRead' }],
        onSelectShelf = jest.fn();

    beforeEach(() => indexMounted = mount(<MemoryRouter initialEntries={[ '/' ]}><BookShelf books={books} onSelectShelf={onSelectShelf} /></MemoryRouter>));
    beforeEach(() => searchMounted = mount(<MemoryRouter initialEntries={[ '/search' ]}><BookShelf books={books} onSelectShelf={onSelectShelf} /></MemoryRouter>));

    it('<BookShelf /> renders correctly', () => {
        expect(shallow(<BookShelf books={books} onSelectShelf={onSelectShelf} />));
    });

    it('<BookShelf /> mount correctly', () => {
        expect(mount(<MemoryRouter><BookShelf books={books} onSelectShelf={onSelectShelf} /></MemoryRouter>));
    });

    it('<BookShelf /> search show input search correctly', () => {
        expect(searchMounted.find('input').length).toBe(1);
    });

    it('<BookShelf /> search show button search correctly', () => {
        expect(searchMounted.find('button.btn').length).toBe(1);
    });

    it('<BookShelf /> show loading on search', () => {
        searchMounted.find('button.btn').simulate('click');
        expect(searchMounted.find('div.loading').length).toBe(1);
    });

    it('<BookShelf /> show shelf on search', () => {
        searchMounted.find('button.btn').simulate('click');
        expect(searchMounted.find('div.book-list').length).toBe(1);        
    });

    it('<BookShelf /> show loading on index', () => {
        expect(indexMounted.find('div.loading').length).toBe(3);
    });

    it('<BookShelf /> show shelves on index', () => {
        expect(indexMounted.find('div.book-list').length).toBe(3);        
    });
});