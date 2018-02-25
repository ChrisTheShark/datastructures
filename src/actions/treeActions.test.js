import * as treeActions from './treeActions'
import * as types from './actionTypes';
import DisplayableBinaryTree from "../structures/DisplayableBinaryTree";

describe('treeActions', () => {
    describe('#addTreeValue()', () => {
        it('should return an appropriate action when invoked', () => {
            const action = treeActions.addTreeValue(new DisplayableBinaryTree(1), 3)
            expect(action.type).toEqual(types.ADD_TREE_VALUE)
            expect(action.payload.value).toEqual(3)
        })
    })

    describe('#resetTree()', () => {
        it('should return an appropriate action when invoked', () => {
            const action = treeActions.resetTree()
            expect(action.type).toEqual(types.RESET_TREE)
            expect(action.payload).toEqual({})
        })
    })
})