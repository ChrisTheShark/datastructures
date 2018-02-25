import React, { Component } from 'react'
import InsertBar from './InsertBar'
import { connect } from 'react-redux'
import { addTreeValue, resetTree } from '../actions/treeActions'

export class DisplayTree extends Component {
    onInsert = (value) => {
        const { tree, addTreeValue } = this.props
        addTreeValue(tree, value)
    }

    onReset = () => {
        this.props.resetTree()
    }

    render() {
        const { tree } = this.props
        return (
            <div>
                <InsertBar onInsert={this.onInsert} onReset={this.onReset}/>
                <h1 style={{ fontSize: '3rem', textAlign: 'center', marginTop: '100px' }}>Binary Tree Height: {tree.height()}</h1>
                <div className="display-container" style={{ display: 'flex', justifyContent: 'center' }}>
                    {
                        tree.value ?
                            tree.display()
                        :
                        null
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tree: state.tree
    }
}

export default connect(mapStateToProps, { addTreeValue, resetTree })(DisplayTree)