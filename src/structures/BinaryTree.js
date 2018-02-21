export const IN_ORDER = 'in-order'
export const PRE_ORDER = 'pre-order'
export const POST_ORDER = 'post-order'

class BinaryTree {

    type = BinaryTree

    constructor(value, parent) {
        this.value = value
        this.parent = parent
        this.right = null
        this.left = null
    }

    max() {
        if (!this.right) {
            return this.value
        } else {
            return this.right.max()
        }
    }

    min() {
        if (!this.left) {
            return this.value
        } else {
            return this.left.min()
        }
    }

    hasChildren() {
        return this.left !== null || this.right !== null
    }

    contains(value) {
        if (this.value === value) {
            return true
        }

        if (this.value > value) {
            if (!this.left) return false
            else return this.left.contains(value)
        } else if (this.value < value) {
            if (!this.right) return false
            else return this.right.contains(value)
        }
    }

    insert(value) {
        value = parseInt(value,10)
        if (!this.value) {
            this.value = value
        } else if (this.value >= value) {
            if (!this.left) this.left = new this.type(value, this)
            else this.left.insert(value)
        } else if (this.value < value) {
            if (!this.right) this.right = new this.type(value, this)
            else this.right.insert(value)
        }
    }

    height() {
        if (!this.value || !this.hasChildren()) return 0
        return Math.max(
            this.left ? this.left.height() : 0,
            this.right ? this.right.height() : 0
        ) + 1
    }

    depth() {
        if (!this.parent) return 0
        else return 1 + this.parent.depth()
    }

    depthFirstTraverse(iteratorFunc, order) {
        const internalOrder = order ? order : IN_ORDER
        if (internalOrder === PRE_ORDER) iteratorFunc(this.value)
        if (this.left) this.left.depthFirstTraverse(iteratorFunc)
        if (internalOrder === IN_ORDER) iteratorFunc(this.value)
        if (this.right) this.right.depthFirstTraverse(iteratorFunc)
        if (internalOrder === POST_ORDER) iteratorFunc(this.value)
    }

    breadthFirstTraverse(iteratorFunc) {
        let queue = [this]

        while (queue.length) {
            let node = queue.shift()

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)

            iteratorFunc(node)
        }
    }
}

export default BinaryTree