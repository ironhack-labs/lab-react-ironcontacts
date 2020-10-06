import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
   constructor(props) {
    super(props);
    this.addRandomStar = this.addRandomStar.bind(this);
    //this.sortName = this.sortName.bind(this);
    this.sortPop = this.sortPop.bind(this);
    this.deleteStar = this.deleteStar.bind(this);
  }

  state = {
    stars: contacts.slice(0, 5),
  };

  displayAllStars() {
    return this.state.stars.map((item, i) => (
      <tr key={i}>
        <td>
          <img src={item.pictureUrl} alt="star picture" />
        </td>
        <td>{item.name}</td>
        <td>{item.popularity}</td>
        <td> <button onClick={() => this.deleteStar(i)}>Remove</button> </td>
      </tr>
    ));
  }

  addRandomStar() {
    console.log('add random star');
    let donotmutate = this.state.stars;
    donotmutate.push(contacts[Math.floor(Math.random() * Math.floor(contacts.length))]);
    this.setState({
      stars: [...new Set(donotmutate)],
    });
  }

  sortName(event) {
    console.log("sort by name");
    let donotmutate = this.state.stars;
    //donotmutate.push(contacts[Math.floor(Math.random() * Math.floor(contacts.length))]);
    donotmutate.sort((a,b) => (a.name < b.name ? -1 : 1) );
    this.setState({
      stars: [...new Set(donotmutate)],
    });
  }

  sortPop() {
    console.log("sort by popularity");
    let donotmutate = this.state.stars;
    donotmutate.sort((a,b) => (a.popularity > b.popularity ? -1 : 1));
    this.setState({
      stars: [...new Set(donotmutate)],
    });
  }

  deleteStar(i) {
    console.log(i);
    let donotmutate = this.state.stars;
    donotmutate.splice(i, 1);
    this.setState({
      stars: [...new Set(donotmutate)],
    }); 

  }

  render() {
    return (
      <div className="App">
        <h1>IronContact</h1>
        <button onClick={this.addRandomStar}>Add Random Contact</button>
        <button onClick={(event) => this.sortName(event)}>Sort by name</button>
        <button onClick={this.sortPop}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>{this.displayAllStars()}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
