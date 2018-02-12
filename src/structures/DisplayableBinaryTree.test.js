import DisplayableBinaryTree from './DisplayableBinaryTree'

describe('DisplayableBinaryTree', () => {
    describe('#insert()', () => {
        it('should insert a value to the structure', () => {
            const tree = new DisplayableBinaryTree(3);
            tree.insert(4);
            expect(tree.contains(4)).toEqual(true);
        })
    })
}