import React from 'react'
import BinaryTree from "./BinaryTree";

class DisplayableBinaryTree extends BinaryTree {
    insert(value) {
        if (this.value >= value) {
            if (!this.left) this.left = new DisplayableBinaryTree(value, this)
            else this.left.insert(value)
        } else if (this.value < value) {
            if (!this.right) this.right = new DisplayableBinaryTree(value, this)
            else this.right.insert(value)
        }
    }

    display() {
        return (
            <div className="tree-node" style={this.parent ? { display: 'flex', flexDirection: 'row' } : { display: 'flex', justifyContent: 'center' } }>
                <span className="node-value">{this.value}</span>
                { this.left ? this.left.display() : null   }
                { this.right ? this.right.display() : null }
            </div>
        )
    }
}

export default DisplayableBinaryTree