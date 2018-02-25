import * as types from './actionTypes';

export function addTreeValue(tree, value) {
    return {
        type: types.ADD_TREE_VALUE,
        payload: { tree, value }
    }
}

export function resetTree() {
    return {
        type: types.RESET_TREE,
        payload: {}
    }
}