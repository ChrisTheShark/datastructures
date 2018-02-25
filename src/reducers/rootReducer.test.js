import rootReducer from './rootReducer'
import { ADD_TREE_VALUE, RESET_TREE } from '../actions/actionTypes';
import initialState from './initialState';
import DisplayableBinaryTree from "../structures/DisplayableBinaryTree";

describe('rootReducer', () => {
    it('should handle the ADD_TREE_VALUE action', () => {
        const expectedTree = new DisplayableBinaryTree(3)
        expectedTree.insert(4)

        expect(rootReducer({ tree: initialState.tree }, {
            type: ADD_TREE_VALUE,
            payload: {
                tree: new DisplayableBinaryTree(3),
                value: 4
            }
        })).toEqual({ tree: expectedTree })
    })

    it('should handle no matches', () => {
        const expectedTree = new DisplayableBinaryTree()

        expect(rootReducer({ tree: initialState.tree }, {
            type: "NOT_A_REAL_TYPE",
            payload: {}
        })).toEqual({ tree: expectedTree })
    })

    it('should handle RESET_TREE', () => {
        const expectedTree = new DisplayableBinaryTree()

        expect(rootReducer({ tree: initialState.tree }, {
            type: RESET_TREE,
            payload: {}
        })).toEqual({ tree: expectedTree })
    })
})