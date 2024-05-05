import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"; 
import Todo from './Components/Todo'
import TodoList from './Components/listTodo'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput:'',
      list:[]
    };
    // Bind the updateInput method to the class
    this.updateInput = this.updateInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  updateInput(value) {
    this.setState({
      userInput: value,
    });
  }

  addItem() {
    if(this.state.userInput !== "") {
      this.setState({
        list: [...this.state.list, this.state.userInput],
        userInput: ""
      });
    }
  }
  
  render() {
    return (
      <div className='App'>
        <h2>TODO TASK</h2>
        <hr/>
        {/* Pass the updateInput method and list as props to the Todo component */}
        <Todo 
          list={this.state.list}
          userInput={this.state.userInput}
          updateInput={this.updateInput}
          addItem={this.addItem}
        />
        <TodoList list={this.state.list}/>
      </div>
    );
  }
}

export default App;

