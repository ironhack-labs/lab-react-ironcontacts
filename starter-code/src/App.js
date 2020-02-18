import React, { Component } from 'react';
import logo from './logo.svg';
import contacts from './contacts.json';
// import Contact from './Contact'
import './App.css';



class App extends Component {

  state = {
    celebrities: [contacts[0], contacts[1],contacts[2],contacts[3], contacts[4]]
  }

  addRandom = () => {
    const copy = [...this.state.celebrities];
    copy.push(contacts[Math.floor(Math.random() * contacts.length)]);
    this.setState({celebrities: copy});
  };

  compareName = (a, b) => {
    const nameA = a.name;
    const nameB = b.name;

    let comparision = 0;
    if (nameA > nameB)  comparision = 1;
    if (nameA < nameB) comparision =  -1;

    return comparision;
  }

  sortByName = () => {
    console.log("clicked")
    const copy = [...this.state.celebrities];
    copy.sort(this.compare)
    console.log(copy.sort(this.compareName))
    this.setState({celebrities : copy})
  };

  comparePopularity = (a, b) => {
    if (a.popularity > b.popularity) return 1;
    if (a.popularity < b.popularity) return -1;
  }

  sortByPopularity = () => {
    const copy = [...this.state.celebrities];
    copy.sort(this.comparePopularity)
    this.setState({celebrities : copy})
  }

  delete = index => {
      const copy = [...this.state.celebrities];
      copy.splice(index, 1);
      this.setState({celebrities : copy})
  }


  render() {
    console.log(this.state.celebrities)

    function round (num) {
        return Math.round(num * 100) / 100;
    };    

    console.log(contacts[Math.floor(Math.random() * contacts.length)])

    return (
      <div className="App">
          <h1>Ironcontacts</h1>
            <button onClick={()=>this.addRandom()}>add a random contact</button>
            <button onClick={()=>this.sortByName()}>Sort by Name</button>
            <button onClick={()=>this.sortByPopularity()}>Sort by Popularity</button>
          <table>
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.celebrities.map((cel,i) => (
                  /* <Contact picture={cel.pictureUrl} name={cel.name} popularity={round(cel.popularity)} key={i} id={cel.id}></Contact> */
                  <tr>
                      <td> <img src={cel.picture}/> </td>
                      <td>{cel.name}</td>
                      <td>{cel.popularity}</td>
                      <td><button onClick= {() => this.delete(i)}>Delete</button></td>
                  </tr>
                ))}
              </tbody>
          </table>
          
      </div>
    );
  }
}

export default App;
