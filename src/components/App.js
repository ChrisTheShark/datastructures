import React, { Component } from 'react';
import DisplayTree from './DisplayTree'
import BinaryTree from '../structures/BinaryTree'

class App extends Component {
  render() {
      const tree = new BinaryTree(3)
      tree.insert(2)
      tree.insert(1)
      tree.insert(4)
      tree.insert(5)

      return (
        <div className="App">
          <DisplayTree tree={tree}/>
        </div>
      )
  }
}

export default App;
