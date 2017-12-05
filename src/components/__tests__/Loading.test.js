import React from 'react'
import { shallow, mount } from 'enzyme'

import Loading from '../Loading'

describe('testing <Loading /> component', () => {
    let wrapper;
    beforeEach(() => { wrapper = shallow(<Loading />); });

	it('<Loading /> renders correctly', () => {
		expect(wrapper);
    });

    it('<Loading /> mount correctly', () => {
		expect(<Loading />);
    });
    
    it('<Loading /> show div correctly', () => {
        expect(wrapper.find('.loading').length).toBe(1);
    });
})
