import React from 'react'
import { shallow } from 'enzyme'
import { DisplayTree } from './DisplayTree'
import DisplayableBinaryTree from '../structures/DisplayableBinaryTree'

describe('DisplayTree', () => {
    it('renders without crashing', () => {
        let wrapper = shallow(<DisplayTree tree={new DisplayableBinaryTree(0)}/>)
        expect(wrapper.find('.display-container').length).toEqual(1)
    })

    it('renders a provided tree when provided', () => {
        const tree = new DisplayableBinaryTree(3)
        tree.insert(2)
        tree.insert(1)
        tree.insert(4)
        tree.insert(5)

        let wrapper = shallow(<DisplayTree tree={tree}/>)
        expect(wrapper.find('.display-container').length).toEqual(1)
    })

    it('invokes the addTreeValue action creator onInsert()', () => {
        const mockAddTreeValue = jest.fn()
        let wrapper = shallow(<DisplayTree addTreeValue={mockAddTreeValue} tree={new DisplayableBinaryTree(4)}/>)

        wrapper.instance().onInsert(2)
        expect(mockAddTreeValue).toHaveBeenCalled()
    })

    it('invokes the resetTree action creator onReset()', () => {
        const mockResetTree = jest.fn()
        let wrapper = shallow(<DisplayTree resetTree={mockResetTree} tree={new DisplayableBinaryTree(4)}/>)

        wrapper.instance().onReset()
        expect(mockResetTree).toHaveBeenCalled()
    })
})