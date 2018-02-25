import React from 'react'
import { shallow } from 'enzyme'
import InsertBar from './InsertBar'

describe('InsertBar', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<InsertBar />)
        expect(wrapper.find('.row').length).toEqual(1)
    })

    it('updates component state onChange of the input', () => {
        const wrapper = shallow(<InsertBar />)
        expect(wrapper.state().value).toEqual('')

        const input = wrapper.find('input')
        expect(input.length).toEqual(1)
        input.simulate('change', { target: { value: "3" }, stopPropagation: () => {} })

        expect(wrapper.state().value).toEqual('3')
    })

    it('invokes the onInsert prop onClick of the insert button', () => {
        const mockOnSubmit = jest.fn()
        const wrapper = shallow(<InsertBar onInsert={mockOnSubmit}/>)

        const button = wrapper.find('button.btn-success')
        expect(button.length).toEqual(1)

        button.simulate('click')
        expect(mockOnSubmit).toHaveBeenCalled()
    })

    it('invokes the onReset prop onClick of the reset button', () => {
        const mockOnReset = jest.fn()
        const wrapper = shallow(<InsertBar onReset={mockOnReset}/>)

        const button = wrapper.find('button.btn-danger')
        expect(button.length).toEqual(1)

        button.simulate('click')
        expect(mockOnReset).toHaveBeenCalled()
    })
})