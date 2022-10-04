import React, { Component } from 'react'

export default class InputTodo extends Component {
  state = {
    title:""
  }
  onChange = e => {
    // console.log("hello")
    this.setState({
      // title:e.target.value
      // [e.target.name]: e.target.value ---form with more form field inputs e.g name, email and password
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state.title)
    this.props.addTodoProps(this.state.title);
    this.setState({
      title:""
    })
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
        name="title"
        type="text" 
        placeholder='Add Todo...' 
        value={this.state.title}
        onChange={this.onChange}/>
        <button>Submit</button>
      </form>
    )
  }
}
