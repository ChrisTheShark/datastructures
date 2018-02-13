import React, { Component } from 'react';
import DisplayTree from './DisplayTree'
import DisplayableBinaryTree from '../structures/DisplayableBinaryTree'

class App extends Component {
  render() {
      const tree = new DisplayableBinaryTree(4)
      tree.insert(2)
      tree.insert(3)
      tree.insert(1)
      tree.insert(6)
      tree.insert(5)
      tree.insert(7)

      return (
        <div className="App">
          <DisplayTree tree={tree}/>
        </div>
      )
  }
}

export default App;
