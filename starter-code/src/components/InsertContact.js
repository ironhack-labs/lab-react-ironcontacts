import React, { Component } from 'react';

class InsertContact extends Component {
  
  state = {
    contact: '',
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleClick = () => {
    const { contact } = this.state
    this.props.onClick(contact);
    this.setState({
      contact: '',
    })
  }

  render() {
    const { contact } = this.state;
    return (
      <>
        <input 
          type="text"
          value={contact}
          onChange={this.handleInput}
          name='contact'
          placeholder='pon aqui algo que seguro se te olvida'
        />
        <button onClick={this.handleClick}>add contact</button>
      </>
    );
  }
}

export default InsertContact;