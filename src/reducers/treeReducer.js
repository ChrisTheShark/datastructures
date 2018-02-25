import initialState from './initialState';
import { ADD_TREE_VALUE, RESET_TREE } from '../actions/actionTypes';
import DisplayableBinaryTree from "../structures/DisplayableBinaryTree";

export default function reduce(state = initialState.tree, action) {
    switch (action.type) {
        case ADD_TREE_VALUE: {
            const newTree = DisplayableBinaryTree.clone(action.payload.tree)
            newTree.insert(action.payload.value)
            return newTree
        }
        case RESET_TREE: {
            return new DisplayableBinaryTree()
        }
        default:
            return state;
    }
}