import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';


class App extends Component {
  
  state = {
    contactArr: contacts.slice(0,5)
  }

  Random = () => {
    let randomContact = undefined
    let randomNumb = Math.floor(Math.random() * (contacts.length - 0)) + 0;
    randomContact = contacts[randomNumb]
    this.setState({
      contactArr: [...this.state.contactArr, randomContact]
    })
  }

  Sort = () => {
    let copy = this.state.contactArr
    let copySorted = copy.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    console.log(copySorted)
    this.setState({
      contactArr: copySorted
    })
  }
  
  Delete = (id) => {
    this.setState({
      contactArr: this.state.contactArr.filter(a => {return a.id !== id})
    })
  }



  render() {
    return (
      <div className="container">
        <h1>IronContacts</h1>
        <section>
          <button onClick={this.Random}>Add Random Contact</button>
          <button onClick={this.Sort}>Sort Contacts</button>
          <header>
            <div className="col">Picture</div>
            <div className="col">Name</div>
            <div className="col">Popularity</div>
          </header>
          {this.state.contactArr.map((x, index) => {
          return(
            <div className="row" key={index}>
              <div className="col"><img alt="pic" src={x.pictureUrl}></img></div>
              <div className="col">         {x.name}             </div>
              <div className="col">         {Number(x.popularity.toFixed(2))}       </div>
              <button onClick={() => this.Delete(x.id)}>Delete</button>
            </div>
          )})}
        </section>
      </div>
    
    );
  }
}

export default App;
