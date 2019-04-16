import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state.text)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea value={this.state.text}
               name="text"
               onChange={this.handleChange}
               className="form"
        />
        <button>Translate</button>
      </form>
    )
  }
}