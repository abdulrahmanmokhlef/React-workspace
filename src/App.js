import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddNewItem from './AddNewItem'
import DeleteItem from './DeleteItem'
import ItemsList from './ItemsList'

class App extends React.Component {
  state = {
    value: '',
    items: [],
  };

  addItem = item => {
    debugger
    this.setState(oldState => ({
      items: [...oldState.items, item],
    }));
  };

  deleteLastItem = event => {
    debugger
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };


  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <AddNewItem  addItem={this.addItem}/>
		<DeleteItem onDeleteLastItem = {this.deleteLastItem} isDisabled={this.noItemsFound()}/> 
        <ItemsList items={this.state.items}/>
      </div>
    );
  }
}

export default App;
