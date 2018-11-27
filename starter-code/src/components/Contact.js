import React, { Component } from "react";

import './Contact.css';
import contacts from '../contacts.json'

class Contact extends Component {

  constructor(props){
    super(props);
    this.state = {
      celeb: contacts.slice(0,4),
    };
  }

  addRandom(){
    const { celeb } = this.state;
    const randomNumber = Math.floor(Math.random() * contacts.length);
    celeb.push(contacts[randomNumber]);
    this.setState({ celeb })
  }

  sortByName(){
    const { celeb } = this.state;
    celeb.sort(function (celeb1, celeb2) {
      if (celeb1.name > celeb2.name) return 1;
      if (celeb1.name < celeb2.name) return -1;
    });
    this.setState({ celeb })
  }

  sortByPopularity(){
    const { celeb } = this.state;
    celeb.sort(function (celeb1, celeb2) {
      if (celeb1.popularity > celeb2.popularity) return -1;
      if (celeb1.popularity < celeb2.popularity) return 1;
    });
    this.setState({ celeb })
  }

  deleteCeleb(celebIndex){
    const { celeb } = this.state;
    celeb.splice(celebIndex, 1);
    this.setState({celeb});
  }

  render(){

    const { celeb } = this.state;
    const celebHtml = 
      celeb.map((oneCeleb, index) => {
        return(
          <li key={index}>
            <img src={oneCeleb.pictureUrl} alt="Movie image" />
            <h3>{oneCeleb.name}</h3>
            <p>{oneCeleb.popularity}</p>
            <button onClick={()=>this.deleteCeleb(index)}>Delete</button>
          </li>
        );
      });

    return(
      <div className="CelebList">
        <h2>IronContacts</h2>
        <button onClick={() => this.addRandom()}>Add Random Contact</button>
        <button onClick={() => this.sortByName()}>Sort By Name</button>
        <button onClick={() => this.sortByPopularity()}>Sort By Popularity</button>
        <ul>
          <div class="table">
          <h2>Picture</h2>
          <h2>Name</h2>
          <h2>Popularity</h2>
          <h2>Action</h2>
          </div>
          {celebHtml}
        </ul>
      </div>
    )
  }

}

export default Contact;