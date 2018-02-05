import BinaryTree from './BinaryTree'

describe('BinaryTree', () => {
    describe('#constructor()', () => {
        it('should accept a value argument to store in the structure', () => {
            const tree = new BinaryTree(3)
            expect(tree.value).toEqual(3)
        });
    });

    describe('#contains()', () => {
        it('should return true if the tree contains the provided value.', () => {
            const tree = new BinaryTree(3);
            expect(tree.contains(3)).toEqual(true);
        });

        it('should return false if the tree does not contain the provided value.', () => {
            const tree = new BinaryTree(3);
            expect(tree.contains(4)).toEqual(false);
        });
    });

    describe('#insert()', () => {
        it('should insert a value to the structure', () => {
            const tree = new BinaryTree(3);
            tree.insert(4);
            expect(tree.contains(4)).toEqual(true);
        })
    })
});