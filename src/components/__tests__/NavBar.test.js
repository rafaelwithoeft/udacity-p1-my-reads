import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import NavBar from '../NavBar'

describe('<NavBar /> Component', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<NavBar />));

	it('<NavBar /> renders correctly', () => {
		expect(wrapper);
    });

    it('<NavBar /> mount correctly', () => {
        /*
        * Workaround for testing with router.
        * Based on: https://github.com/ReactTraining/react-router/issues/4795
        */
        mount(<MemoryRouter><NavBar /></MemoryRouter>);
    });
    
    it('<NavBar /> show div correctly', () => {
        expect(wrapper.find('nav.navbar').length).toBe(1);
    });

    it('<NavBar /> show home link correctly', () => {
        expect(wrapper.find('Link').findWhere(node => node.props().to === '/').length).toBe(1);
    });

    it('<NavBar /> show search link correctly', () => {
        expect(wrapper.find('Link').findWhere(node => node.props().to === '/search').length).toBe(1);
    });
})
