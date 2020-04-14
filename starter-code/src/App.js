import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';


class App extends Component {
  
  state = {
    contactArr: contacts.slice(0,5)
  }
  
  render() {
    return (
      <div class="container">
        <h1>IronContacts</h1>
        <section>
          <header>
            <div class="col">Picture</div>
            <div class="col">Name</div>
            <div class="col">Popularity</div>
          </header>
          {this.state.contactArr.map(x => {
          return(
            <div class="row">
              <div class="col"><img src={x.pictureUrl}></img></div>
              <div class="col">         {x.name}             </div>
              <div class="col">         {Number(x.popularity.toFixed(2))}       </div>
            </div>
          )})}
        </section>
      </div>
    
    );
  }
}

export default App;
