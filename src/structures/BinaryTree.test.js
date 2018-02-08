import BinaryTree from './BinaryTree'
import { PRE_ORDER, POST_ORDER, IN_ORDER } from "./BinaryTree";

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

    describe('#getMaxValue', () => {
        it('should return the maximum value in the tree', () => {
            const tree = new BinaryTree(3)
            tree.insert(2);
            tree.insert(1);
            tree.insert(4);

            expect(tree.getMaxValue()).toEqual(4)
        })
    })

    describe('#getMinValue', () => {
        it('should return the maximum value in the tree', () => {
            const tree = new BinaryTree(3)
            tree.insert(2);
            tree.insert(1);
            tree.insert(4);

            expect(tree.getMinValue()).toEqual(1)
        })
    })
});