import React, { Component } from 'react';
// import './App.css';
import TodoList from './TodoList';
import TodoItems from './TodoItems';

class App extends Component {
  inputElement = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      doneItems: [],
      currentItem: { text: '', key: '' },
    }
  }
  deleteItem = key => {
    const done = this.state.doneItems.filter(item => {
      return item.key == key;
    })
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
      doneItems: done,
    })
  }

  handleInput = e => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }

  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== '') {
      console.log(newItem);
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: { text: '', key: '' }
      })
    }
    console.log('Hello Add Item');

  }




  render() {
    return (
      <div className="App">
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <TodoItems entries={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
