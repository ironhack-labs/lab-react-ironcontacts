import React, { Component } from 'react';
import Row from './Row.js'


class Table extends Component{
  constructor(props){
    super(props)
    this.state = {
      contacts : this.props.contacts
    }
    
  }

  deleteContactHandler = (index) => {
    const contactsCopy = this.state.contacts;
    contactsCopy.splice(index, 1);
    // above is how you remove an item from an array
    this.setState({
      contacts: contactsCopy
    })
  }

  render(){
    console.log(this.state);
    // leave this console.log() so we can keep track of our state inside our browser's console
    return(
      <div>
        {
          this.state.contacts.map((oneContact, index) => {
            // return <ImprovedCard key={index} {...oneMovie} clickToDelete={this.deleteMovieHandler.bind(this, index)} />
            return(<Row key={index} picture={oneContact.pictureUrl} name={oneContact.name} popularity={oneContact.popularity} clicktoDelete={() => this.deleteContactHandler(index)}></Row>)
          })
        }
      </div>
    );
  }
}

export default Table;