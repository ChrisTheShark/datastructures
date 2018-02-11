import React from 'react'
import { shallow } from 'enzyme'
import DisplayTree from './DisplayTree'
import BinaryTree from '../structures/BinaryTree'

describe('DisplayTree', () => {
    // it('renders without crashing', () => {
    //     let wrapper = shallow(<DisplayTree tree={new BinaryTree(0)}/>)
    //     expect(wrapper.find('.display-container').length).toEqual(1)
    // })

    it('renders a provided tree when provided', () => {
        const tree = new BinaryTree(3)
        tree.insert(2)
        tree.insert(1)
        tree.insert(4)
        tree.insert(5)

        let wrapper = shallow(<DisplayTree tree={tree}/>)
        expect(wrapper.find('.display-container').length).toEqual(1)
    })
})