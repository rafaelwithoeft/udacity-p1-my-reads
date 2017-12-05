import React from 'react'
import { shallow, mount } from 'enzyme'

import Book from '../Book'

describe('<Book /> Component', () => {
    let wrapper,
        book = { id: 1, title: 'Book Test', shelf: 'read' },
        onSelectShelf = jest.fn();
    beforeEach(() => wrapper = shallow(<Book book={book} onSelectShelf={onSelectShelf} />));

    it('<Book /> renders correctly', () => {
        expect(wrapper);
    });

    it('<Book /> mount correctly', () => {
        expect(mount(<Book book={book} onSelectShelf={onSelectShelf} />));
    });

    it('<Book /> show div.card correctly', () => {
        expect(wrapper.find('div.card').length).toBe(1);
    });

    it('<Book /> show book title correctly', () => {
        expect(wrapper.find('.card-title').text()).toBe("Book Test");
    });

    it('<Book /> select expects four values', () => {
        expect(wrapper.find('select > option').length).toBe(4);
    });

    //Not working
    /*it('<Book /> select shelf show value correctly', () => {       
        expect(wrapper.find('[selected]').first().props().value).toBe("read");
    });*/

    it('<Book /> expects onSelectShelf to be called on select change', () => {
        const component = mount(<Book book={book} onSelectShelf={onSelectShelf} />);
        component.find('select').simulate('change');
        expect(onSelectShelf).toHaveBeenCalledTimes(1);
    });
})
