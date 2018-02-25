import BinaryTree from './BinaryTree'
import { PRE_ORDER, POST_ORDER, IN_ORDER } from "./BinaryTree";

describe('BinaryTree', () => {
    describe('#constructor()', () => {
        it('should accept a value argument to store in the structure', () => {
            const tree = new BinaryTree(3)
            expect(tree.value).toEqual(3)
        });
    });

    describe('#clone()', () => {
        it('should copy a provided tree', () => {
            const treeToCopy = new BinaryTree(3)
            treeToCopy.insert(1)
            treeToCopy.insert(5)

            const copiedTree = BinaryTree.clone(treeToCopy)

            expect(copiedTree.value).toEqual(treeToCopy.value)
            expect(copiedTree.left).toEqual(treeToCopy.left)
            expect(copiedTree.right).toEqual(treeToCopy.right)
        })
    })

    describe('#hasChildren()', () => {
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

        it('should return true if the tree contains the value to the left', () => {
            const tree = new BinaryTree(3);

            tree.insert(2)
            tree.insert(1)
            tree.insert(4)
            tree.insert(5)

            expect(tree.contains(2)).toEqual(true);
            expect(tree.contains(1)).toEqual(true);
            expect(tree.contains(4)).toEqual(true);
            expect(tree.contains(5)).toEqual(true);
        })
    });

    describe('#insert()', () => {
        it('should insert a value to the structure, setting the top value if null', () => {
            const tree = new BinaryTree();
            tree.insert(3);
            expect(tree.value).toEqual(3);
        })
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

    describe('#breadthFirstTraverse', () => {
        it('should invoke the provided function in breadth order', () => {
            const mockIterator = jest.fn()
            const tree = new BinaryTree(3)
            tree.insert(2);
            tree.insert(1);
            tree.insert(4);

            tree.breadthFirstTraverse(mockIterator)

            expect(mockIterator.mock.calls[0][0]).not.toBeNull()
            expect(mockIterator.mock.calls[1][0]).not.toBeNull()
            expect(mockIterator.mock.calls[2][0]).not.toBeNull()
            expect(mockIterator.mock.calls[3][0]).not.toBeNull()
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

    describe('#depth', () => {
        it('should return 0 if tree is the root with null value', () => {
            const tree = new BinaryTree()
            expect(tree.depth()).toEqual(0)
        })

        it('should return 0 if tree is the root with non null value', () => {
            const tree = new BinaryTree(3)
            expect(tree.depth()).toEqual(0)
        })

        it('should return 1 if tree has a parent and has a height of one', () => {
            const tree = new BinaryTree(3)
            tree.insert(2)
            tree.insert(4)

            expect(tree.left.depth()).toEqual(1)
            expect(tree.right.depth()).toEqual(1)
        })

        it('should return 2 if tree has two parents and is the has a height of one', () => {
            const tree = new BinaryTree(3)
            tree.insert(2)
            tree.insert(1)
            tree.insert(4)
            tree.insert(5)

            expect(tree.left.left.depth()).toEqual(2)
            expect(tree.right.right.depth()).toEqual(2)
        })
    })
});