import React from 'react'
import { shallow, mount } from 'enzyme'

import BookList from '../BookList'

describe('<BookList /> Component', () => {
    let wrapper,
        mounted,
        books = [{ id: 1, title: 'Book Test', shelf: 'read' }, { id: 2, title: 'Book Test 2', shelf: 'read' }],
        onSelectShelf = jest.fn();
    beforeEach(() => wrapper = shallow(<BookList name='read' books={books} onSelectShelf={onSelectShelf} loading={false} />));
    beforeEach(() => mounted = mount(<BookList name='read' books={books} onSelectShelf={onSelectShelf} loading={false} />));

    it('<BookList /> renders correctly', () => {
        expect(wrapper);
    });

    it('<BookList /> mount correctly', () => {
        expect(mounted);
    });

    it('<BookList /> show loading correctly', () => {
    const component = mount(<BookList name='read' books={books} onSelectShelf={onSelectShelf} loading={true} />);
        expect(component.find('div.loading').length).toBe(1);
    });

    it('<BookList /> show div cards correctly', () => {
        expect(mounted.find('div.card').length).toBe(2);
    });

    it('<BookList /> show div alert correctly', () => {
        expect(mounted.find('div.alert').length).toBe(1);
    });
})
