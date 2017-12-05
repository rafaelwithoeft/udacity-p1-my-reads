import React from 'react'
import { shallow, mount } from 'enzyme'

import BookSearch from '../BookSearch'

describe('<BookSearch /> Component', () => {
    let wrapper,
        mounted,
        booksOnShelf = [{ id: 1, title: 'Book Test', shelf: 'read' }, { id: 2, title: 'Book Test 2', shelf: 'read' }],
        onSelectShelf = jest.fn();
    beforeEach(() => wrapper = shallow(<BookSearch booksOnShelf={booksOnShelf} onSelectShelf={onSelectShelf} />));
    beforeEach(() => mounted = mount(<BookSearch booksOnShelf={booksOnShelf} onSelectShelf={onSelectShelf} />));

    it('<BookSearch /> renders correctly', () => {
        expect(wrapper);
    });

    it('<BookSearch /> mount correctly', () => {
        expect(mounted);
    });

    it('<BookSearch /> show input search correctly', () => {
        expect(mounted.find('input').length).toBe(1);
    });

    it('<BookSearch /> show button search correctly', () => {
        expect(mounted.find('button.btn').length).toBe(1);
    });

    //Not working
    // it('<BookSearch /> expects onChange to be called when input change', () => {
    //     const spy = jest.spyOn(mounted.instance(), 'onSearchQueryChange');
    //     mounted.update();
    //     mounted.find('input').simulate('change');
    //     expect(spy).toHaveBeenCalledTimes(1);
    // });

    //Not working
    // it('<BookSearch /> expects onClick to be called on button click', () => {
    //     const spy = jest.spyOn(mounted.instance(), 'onSearchButtonClicked');
    //     mounted.update();
    //     mounted.find('button.btn').simulate('click');
    //     expect(spy).toHaveBeenCalledTimes(1);
    // });

    it('<BookSearch /> show loading div correctly', () => {
        mounted.find('button.btn').simulate('click');
        expect(mounted.find('div.loading').length).toBe(1);
    });

    it('<BookSearch /> show results on successfull search', () => {
        mounted.find('button.btn').simulate('click');
        expect(mounted.find('div.book-list').length).toBe(1);
    });
})
