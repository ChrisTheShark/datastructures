import React, { Component } from 'react'
import InsertBar from './InsertBar'
import DisplayableBinaryTree from '../structures/DisplayableBinaryTree'

class DisplayTree extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tree: new DisplayableBinaryTree()
        }
    }

    onInsert = (value) => {
        let tree = this.state.tree
        tree.insert(value)
        this.setState({ tree })
    }

    render() {
        return (
            <div>
                <InsertBar onInsert={this.onInsert}/>
                <h1 style={{ fontSize: '3rem', textAlign: 'center', marginTop: '100px' }}>Binary Tree Height: {this.state.tree.height()}</h1>
                <div className="display-container" style={{ display: 'flex', justifyContent: 'center' }}>
                    {
                        this.state.tree.value ?
                            this.state.tree.display()
                        :
                        null
                    }
                </div>
            </div>
        )
    }
}

export default DisplayTree