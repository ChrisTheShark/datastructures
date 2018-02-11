import BinaryTree from './BinaryTree'
import { PRE_ORDER, POST_ORDER, IN_ORDER } from "./BinaryTree";

describe('BinaryTree', () => {
    describe('#constructor()', () => {
        it('should accept a value argument to store in the structure', () => {
            const tree = new BinaryTree(3)
            expect(tree.value).toEqual(3)
        });
    });

    describe('#hasChildren', () => {
        it('should return false if left and right are null', () => {
            const tree = new BinaryTree(3)
            expect(tree.hasChildren()).toEqual(false)
        })

        it('should return true if left is not null but right is', () => {
            const tree = new BinaryTree(3)
            tree.insert(2)
            expect(tree.hasChildren()).toEqual(true)
        })

        it('should return true if right is not null but left is', () => {
            const tree = new BinaryTree(3)
            tree.insert(4)
            expect(tree.hasChildren()).toEqual(true)
        })

        it('should return true if both children are present', () => {
            const tree = new BinaryTree(3)
            tree.insert(2)
            tree.insert(4)
            expect(tree.hasChildren()).toEqual(true)
        })
    })

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

    describe('#depthFirstTraverse', () => {
        it('should invoke the provided function in order if requested', () => {
            const mockIterator = jest.fn()
            const tree = new BinaryTree(3)
            tree.insert(2);
            tree.insert(1);
            tree.insert(4);

            tree.depthFirstTraverse(mockIterator, IN_ORDER)

            expect(mockIterator.mock.calls[0][0]).toBe(1)
            expect(mockIterator.mock.calls[1][0]).toBe(2)
            expect(mockIterator.mock.calls[2][0]).toBe(3)
            expect(mockIterator.mock.calls[3][0]).toBe(4)
        })

        it('should invoke the provided function in pre-order if requested', () => {
            const mockIterator = jest.fn()
            const tree = new BinaryTree(3)
            tree.insert(2);
            tree.insert(1);
            tree.insert(4);

            tree.depthFirstTraverse(mockIterator, PRE_ORDER)

            expect(mockIterator.mock.calls[0][0]).toBe(3)
            expect(mockIterator.mock.calls[1][0]).toBe(1)
            expect(mockIterator.mock.calls[2][0]).toBe(2)
            expect(mockIterator.mock.calls[3][0]).toBe(4)
        })

        it('should invoke the provided function in post-order if requested', () => {
            const mockIterator = jest.fn()
            const tree = new BinaryTree(3)
            tree.insert(2);
            tree.insert(1);
            tree.insert(4);

            tree.depthFirstTraverse(mockIterator, POST_ORDER)

            expect(mockIterator.mock.calls[0][0]).toBe(1)
            expect(mockIterator.mock.calls[1][0]).toBe(2)
            expect(mockIterator.mock.calls[2][0]).toBe(4)
            expect(mockIterator.mock.calls[3][0]).toBe(3)
        })
    })

    describe('#max', () => {
        it('should return the maximum value in the tree', () => {
            const tree = new BinaryTree(3)
            tree.insert(2);
            tree.insert(1);
            tree.insert(4);

            expect(tree.max()).toEqual(4)
        })
    })

    describe('#min', () => {
        it('should return the maximum value in the tree', () => {
            const tree = new BinaryTree(3)
            tree.insert(2);
            tree.insert(1);
            tree.insert(4);

            expect(tree.min()).toEqual(1)
        })
    })

    describe('#height', () => {
        it('should return 0 if the root value is null', () => {
            const tree = new BinaryTree()
            expect(tree.height()).toEqual(0)
        })

        it('should return 0 if the root value is not null and there are no edges', () => {
            const tree = new BinaryTree(3)
            expect(tree.height()).toEqual(0)
        })

        it('should return 1 if the value is not null and there are left and right branches', () => {
            const tree = new BinaryTree(3)
            tree.insert(1);
            tree.insert(4);
            expect(tree.height()).toEqual(1)
        })
    })
});