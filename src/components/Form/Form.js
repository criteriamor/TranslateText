import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'

export class Form extends Component {
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

  handleClick = () => {
    let { history, translations } = this.props
    if(translations.length) {
      history.push('/translations')
    } else {
      this.props.handleError('you don`t have any translations to see')
    }
  }

  handleSubmit = (e) => {
    let { history } = this.props
    e.preventDefault()
    if(this.state.text) {
      this.props.handleSubmit(this.state.text)
      history.push('/translations')
    } else {
      this.props.handleError('type something to translate')
    }
  }

  render() {
    return (
      <div>
          
        <button onClick={this.handleClick} className="nav-link">
              See Translations.
        </button>
          
        <Link to="/" className="header">
            Translate to French.
        </Link>
      <form onSubmit={this.handleSubmit}
            className="form">
        <div id="input-cont">
          <textarea value={this.state.text}
                  name="text"
                  onChange={this.handleChange}
                  className="input"
                  placeholder="Type your english text to translate here! Expand the text area for more space."
            />
            <button className="translate-btn">Translate</button>
        </div>
      </form>
      </div>
    )
  }
}

export default withRouter(Form)