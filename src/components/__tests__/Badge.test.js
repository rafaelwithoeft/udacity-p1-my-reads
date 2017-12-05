import React from 'react'
import { shallow, mount } from 'enzyme'

import Badge from '../Badge'

describe('testing <Badge /> component', () => {
    let wrapper;
    beforeEach(() => { wrapper = shallow(<Badge message="3" />); });

	it('<Badge /> renders correctly', () => {
		expect(wrapper);
    });

    it('<Badge /> mount correctly', () => {
		mount(<Badge message="3" />);
    });
    
    it('<Badge /> show div correctly', () => {
        expect(wrapper.find('.badge').length).toBe(1);
    });

    it('<Badge /> show message correctly', () => {
        expect(wrapper.find('span.badge').text()).toEqual("3");
    });
})
