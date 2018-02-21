import React from 'react'
import BinaryTree from "./BinaryTree";

const nodeStyle = {
    border: '1px solid black',
    borderRadius: '50%',
    textAlign: 'center',
    display: 'inline-block',
    minWidth: '70px',
    minHeight: '50px',
    fontSize: '3rem',
    backgroundColor: '#5bc0de'
}

export const leftStyle = {
    float: 'left',
    marginTop: '50px'
}

export const rightStyle = {
    float: 'right',
    marginTop: '50px'
}

class DisplayableBinaryTree extends BinaryTree {

    type = DisplayableBinaryTree

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