import DisplayableBinaryTree from './DisplayableBinaryTree'
import { leftStyle, rightStyle } from "./DisplayableBinaryTree";

describe('DisplayableBinaryTree', () => {
    describe('#insert()', () => {
        it('should insert a value to the structure', () => {
            const tree = new DisplayableBinaryTree(3);
            tree.insert(4);
            expect(tree.contains(4)).toEqual(true);
        })

        it('should insert a value to the left of the structure if equal to this', () => {
            const tree = new DisplayableBinaryTree(2);
            tree.insert(2);
            expect(tree.left.value).toEqual(2);
        })

        it('should insert a value to the left of the structure if less than this', () => {
            const tree = new DisplayableBinaryTree(3);
            tree.insert(2);
            expect(tree.left.value).toEqual(2);
        })

        it('should insert a value to the right of the structure if greater than this', () => {
            const tree = new DisplayableBinaryTree(3);
            tree.insert(4);
            expect(tree.right.value).toEqual(4);
        })
    })

    describe('#getDirectionStyle()', () => {
        it('should return a default style if parent is null', () => {
            const tree = new DisplayableBinaryTree(3);
            expect(tree.getDirectionStyle()).toEqual({ marginTop: '50px' })
        })

        it('should return a left style if parent greater than  or equal to this', () => {
            const tree = new DisplayableBinaryTree(3);
            tree.insert(2)
            expect(tree.left.getDirectionStyle()).toEqual(leftStyle)
        })

        it('should return a right style if parent less than this', () => {
            const tree = new DisplayableBinaryTree(3);
            tree.insert(4)
            expect(tree.right.getDirectionStyle()).toEqual(rightStyle)
        })
    })

    describe('#display()', () => {
        it('should return JSX for display of the tree', () => {
            const tree = new DisplayableBinaryTree(3);
            expect(tree.display()).not.toBeNull()
        })
    })
})