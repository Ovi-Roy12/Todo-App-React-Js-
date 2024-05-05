import React,{Component} from 'react'


class Todo extends Component{
  render(){
    return(
      <div className='todo'>
        <input 
          className="form-control" 
          type="text" 
          value={this.props.userInput}
          onChange={(item)=>{
            this.props.updateInput(item.target.value)
          }}
          placeholder="Default input" 
          aria-label="default input example"
          style={{ width: '300px', height: '40px',}} 
        />
        <button onClick={this.props.addItem} type="button" class="btn btn-primary">Add Task</button>
      </div>
    )
  }
}

export default Todo