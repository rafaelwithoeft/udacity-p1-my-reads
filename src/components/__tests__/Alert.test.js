import React from 'react'
import { shallow, mount } from 'enzyme'

import Alert from '../Alert'

describe('testing <Alert /> component', () => {
    let wrapper;
    beforeEach(() => { wrapper = shallow(<Alert message="Currently Reading" classAlert="alert alert-primary" />); });

	it('<Alert /> renders correctly', () => {
		expect(wrapper);
    });

    it('<Alert /> mount correctly', () => {
		mount(<Alert message="Currently Reading" classAlert="alert alert-primary" />);
    });
    
    it('<Alert /> show div correctly', () => {
        expect(wrapper.find('.alert-primary').length).toBe(1);
    });

    it('<Alert /> show message correctly', () => {
        expect(wrapper.find('h3').text()).toEqual("Currently Reading ");
    });
})
