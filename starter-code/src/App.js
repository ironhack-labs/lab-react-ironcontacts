import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import FamousTable from './componentes/FamousTable/FamousTable'

class App extends Component {

  constructor(){

    super()
    
    this.allFamous = contacts
    this.state = {
          famous : contacts.slice(0,5),
          allFamous : contacts


    }

  }

  createNew = () => {
    
    this.state.famous.push(this.allFamous[Math.floor(Math.random() * (this.allFamous.length)) + 0])
    console.log(this.state.famous)
    this.setState(this.state.famous)
  }

  sortName = () => {

    const copyfamous = [...this.state.famous];
    copyfamous.sort((a,b)=> {

      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });

     
    this.setState({famous : copyfamous})

    

  }

  sortPopularity = () =>{

    const copyfamous = [...this.state.famous];
    copyfamous.sort((a,b)=> {

      if (a.popularity > b.popularity) {
        return 1;
      }
      if (a.popularity < b.popularity) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });

     
    this.setState({famous : copyfamous})

  }

  deleteFamous = idx =>{
      console.log("delete")
      const copyFamous = [...this.state.famous]
      copyFamous.splice(idx, 1)
      this.setState({ famous : copyFamous })
  }

  

  render() {

    

    return (
      <div className="App">
      <h1 class="my-3">Iron Contacts</h1>
      <button class="btn btn-primary px-md-3 mx-3 my-3" onClick={this.createNew}>Create new famous</button>
      <button class="btn btn-warning px-md-3 mx-3 my-3" onClick={this.sortName}>Sort by name</button>
      <button class="btn btn-warning px-md-3 mx-3 my-3" onClick={this.sortPopularity}>Sort by popularity</button>
        <article>
        <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody className="align-middle">
          {this.state.famous.map((elm, idx) => <FamousTable key={idx} famousname={elm.name} imgurl={elm.pictureUrl} popularity={elm.popularity} deleteFamous={() => this.deleteFamous(idx)} />)}
          </tbody>
        </table>
        </article>
      </div>
    );
  }
}

export default App;
