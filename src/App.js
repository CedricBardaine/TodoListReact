import React, {Component} from 'react';
import './App.css';
import TodoList from './TodoList' ; 
import TodoItems from './TodoItems' ; 

class App extends Component {
  constructor() {
    super() ;
    this.state = {
      items: [] ,
      currentItem: {text: '', key: ''},
    }
  }
  handleInput = e => {
    const itemText = e.target.value ; 
    const currentItem = { text: itemText , key: Date.now() } ; 
    this.setState({
      currentItem,
    });
    console.log('You are writing a new task :)') ; 
  }
  addItem = e => {
    e.preventDefault() ;
    const newItem = this.state.currentItem ; 
    if ( newItem.text !== '' && newItem.text !==' ') {
      console.log(newItem) ; 
      const items = [...this.state.items, newItem] ;
      this.setState ({
        items: items, 
        currentItem: {text: '' , key: ''} ,
      })
    }
    console.log('You clicked on the Add Task button :)') ; 
  }
  
  deleteItem = key => {
    let tasktodelete  ;
    this.state.items.forEach(item => {
      if ( item.key === key) tasktodelete = item ; 
    });
    if ( window.confirm("Are you sure to delete " + tasktodelete.text ) ) {
      
      const filteredItems = this.state.items.filter(item => {
        return item.key !== key
      })
      this.setState ({
        items: filteredItems,
      })
    }
  }
  
  
  inputElement = React.createRef() ;
  
  render() { return (
    <div className="App">
    <TodoList 
    addItem={this.addItem} 
    inputElement= {this.inputElement} 
    handleInput = {this.handleInput}
    currentItem = {this.state.currentItem} 
    />
    
    <TodoItems 
    entries = {this.state.items} 
    deleteItem={this.deleteItem}
    />
    </div>
    ); 
  }
  
}

export default App;
