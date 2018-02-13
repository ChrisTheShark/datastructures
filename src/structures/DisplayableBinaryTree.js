import React from 'react'
import BinaryTree from "./BinaryTree";

const nodeStyle = {
    border: '1px solid black',
    borderRadius: '50%',
    textAlign: 'center',
    display: 'inline-block',
    minWidth: '50px',
    minHeight: '50px',
    fontSize: '3rem'
}

const leftStyle = {
    float: 'left',
    marginTop: '50px'
}

const rightStyle = {
    float: 'right',
    marginTop: '50px'
}

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

    getDirectionStyle() {
        if (this.parent) {
            if (this.parent.value >= this.value) return leftStyle
            if (this.parent.value < this.value) return rightStyle
        }
        return { marginTop: '50px' }
    }

    display() {
        return (
            <div className="tree-node" style={this.getDirectionStyle()}>
                <span className="node-value" style={{ ...nodeStyle }}>{this.value}</span>
                { this.left ? this.left.display() : null   }
                { this.right ? this.right.display() : null }
            </div>
        )
    }
}

export default DisplayableBinaryTree