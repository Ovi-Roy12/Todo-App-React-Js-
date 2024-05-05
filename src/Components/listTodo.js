import React, { Component } from 'react'

class Todolist extends Component {
  render() {
    return (
      <div>
        <div class="container text-center">
          <div class="row m-5">
            <div class="col-12 col-sm-4">
            <ul>
                {this.props.list.map((item, index) => (
                  <li key={index}>{item}
                  <button type="button" class="btn btn-danger"
                  style={{ margin:"20px"}} 
                  >Delete</button>
                  </li>
                ))}
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Todolist