import React from 'react'
import Child from './child.jsx'

var Parent = React.createClass({

  getInitialState(){
    return {
      items: [
        "Parent initialized"
      ]
    }
  },

  addItemFromInput(){
    this.addItem(this.refs.itemInput.value);
  },

  addItem(item){
    var items = this.state.items;
    items.push(item);
    this.setState({items: items});
  },

  componentDidMount(){
    this.addItem("Parent mounted");
  },

  render(){
    return (
      <div>
      <input type="text" ref="itemInput"/>
      <button onClick={this.addItemFromInput}>Add item</button>
        <div>
          <Child items={this.state.items}/>
        </div>
      </div>
    );
  }

})

module.exports = Parent;
