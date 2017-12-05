import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import App from './App'

describe('<App />', () => {
	it('<App /> shallow renders without crashing', () => {
		expect(shallow(<App />))
    });
    
    it('<App /> mount renders without crashing', () => {
		expect(mount(<MemoryRouter><App /></MemoryRouter>))
	});
});