import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App', () => {
    it('renders without crashing', () => {
        let wrapper = shallow(<App/>)
        expect(wrapper.find('.App').length).toEqual(1)
    })
})
