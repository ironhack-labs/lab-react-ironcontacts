import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";


class App extends React.Component {
  state = {
    contacts: contacts.splice(0, 5)
  }

  delete = (index)=>{
    const copiedArray = [...this.state.contacts];
    copiedArray.splice(index, 1)
    return (
      this.setState({contacts:copiedArray})
    )
  }

  display = () => {
    //Ojo con los return. Uno para el map y otro para el return!!
    return this.state.contacts.map((contact, index) => {
      return (
        <tr key={index}>

          <td>
            <img src={contact.pictureUrl} alt={contact.name} />
          </td>

          <td>
            {contact.name}
          </td>

          <td>
            {contact.popularity}
          </td>

          <td>
            <button onClick = {()=>{ this.delete(index) }}>Delete contact</button>           
          </td>

        </tr>
      )
    })
  }

  random = () => {
    const copiedArray = [...this.state.contacts];
    const randomContact = Math.floor(Math.random() * contacts.length);
    copiedArray.push(contacts[randomContact]);
    return (
      this.setState({ contacts: copiedArray })
    )

  };

  sortName = ()=>{
    const copiedArray = [...this.state.contacts];
    copiedArray.sort((a,b)=>{
      if(a.name > b.name) return 1
      if(a.name < b.name) return -1
      return 0
    })
    return (
      this.setState({ contacts: copiedArray })
    )
  }

  sortPopularity = ()=>{
    const copiedArray = [...this.state.contacts];
    copiedArray.sort((a,b) =>{
      if(a.popularity > b.popularity){
        return -1
      }
      if(a.popularity < b.popularity){
        return 1
      }else{
        return (0)
      }
    })
    return (
      this.setState({contacts: copiedArray})
    )
  }


  render() {
    return (
      <div className="App">
        <button onClick={this.random}>Random Contact</button>
        <button onClick={this.sortName}>Sort by Name</button>
        <button onClick={this.sortPopularity}>Sort by Popularity Score</button>

        <table>
          <thead className="table">
            <tr>
              <th>Img</th>
              <th>Name</th>
              <th >Popularity Score</th>
            </tr>
          </thead>
          <tbody>
            {this.display()}
          </tbody>
        </table>

      </div>
    )
  }
}


export default App;
