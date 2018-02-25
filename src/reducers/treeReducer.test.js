import treeReducer from './treeReducer'
import { ADD_TREE_VALUE, RESET_TREE } from '../actions/actionTypes';
import initialState from './initialState';
import DisplayableBinaryTree from "../structures/DisplayableBinaryTree";

describe('treeReducer', () => {
    it('should handle the ADD_TREE_VALUE action', () => {
        const expectedTree = new DisplayableBinaryTree(3)
        expectedTree.insert(4)

        expect(treeReducer(initialState.tree, {
            type: ADD_TREE_VALUE,
            payload: {
                tree: new DisplayableBinaryTree(3),
                value: 4
            }
        })).toEqual(expectedTree)
    })

    it('should handle no matches', () => {
        const expectedTree = new DisplayableBinaryTree()

        expect(treeReducer(initialState.tree, {
            type: "NOT_A_REAL_TYPE",
            payload: {}
        })).toEqual(expectedTree)
    })

    it('should handle RESET_TREE', () => {
        const expectedTree = new DisplayableBinaryTree()

        expect(treeReducer(initialState.tree, {
            type: RESET_TREE,
            payload: {}
        })).toEqual(expectedTree)
    })
})