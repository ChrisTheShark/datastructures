import React from 'react'

const DisplayTree = (props) => {
    return (
        <div className="display-container" style={{ display: 'flex', justifyContent: 'center' }}>
            {
                props.tree.display()
            }
        </div>
    )
}

export default DisplayTree