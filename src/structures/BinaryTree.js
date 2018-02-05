class BinaryTree {
    constructor(value) {
        this.value = value
        this.right = null
        this.left = null
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
        if (this.value >= value) {
            if (!this.left) this.left = new BinaryTree(value)
            else this.left.insert(value)
        } else if (this.value < value) {
            if (!this.right) this.right = new BinaryTree(value)
            else this.right.insert(value)
        }
    }
}

export default BinaryTree