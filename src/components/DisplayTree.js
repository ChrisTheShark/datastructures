import React from 'react'

const mapTreeNodes = (tree) => {
    let sortedResults = {}

    tree.breadthFirstTraverse((node) => {
        let mappedNode = <div
            key={node.value}
            className={`tree-node node-level-${node.depth()}`}>
            {node.value}
        </div>

        if (sortedResults[node.depth()]) {
            sortedResults[node.depth()].push(mappedNode)
        } else {
            sortedResults[node.depth()] = [mappedNode]
        }
    })

    return sortedResults
}

const DisplayTree = (props) => {
    let results = mapTreeNodes(props.tree)
    return (
        <div className="display-container">
            {
                Object.keys(mapTreeNodes(props.tree)).map((key) => {
                    return results[key]
                })
            }
        </div>
    )
}

export default DisplayTree