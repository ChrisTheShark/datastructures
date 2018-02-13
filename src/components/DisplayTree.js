import React from 'react'

const DisplayTree = (props) => {
    return (
        <div>
            <h1 style={{ fontSize: '3rem', textAlign: 'center', marginTop: '100px' }}>Binary Tree Height: {props.tree.height()}</h1>
            <div className="display-container" style={{ display: 'flex', justifyContent: 'center' }}>
                {
                    props.tree.display()
                }
            </div>
        </div>
    )
}

export default DisplayTree