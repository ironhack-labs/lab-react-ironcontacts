import './index.css';
import React from 'react';
import contacts from "./contacts.json";
import 'bulma/css/bulma.css';


class App extends React.Component {

state = {
  celebrities: contacts.slice(0, 5)

}

addContact = () => {

  const randomContact = contacts[Math.floor(Math.random() * (contacts.length - 5)) + 5];
  this.setState((state) => ({
    celebrities: [randomContact, ...state.celebrities]
  }))
};

sortByName = () => {
  const nameSorted = this.state.celebrities.sort(function (a, b) {
    return a.name.localeCompare(b.name)
  })
  this.setState((state) => ({
    celebrities: nameSorted
  }))  
};

sortByPopularity = () => {
  const popularitySorted = this.state.celebrities.sort(function (a, b) {
    return b.popularity - a.popularity
  })
  this.setState((state) => ({
    celebrities: popularitySorted
  }))  
};


deleteContact = id => {
  const contactsCopy = [...this.state.celebrities];
  const contactIndex = contactsCopy.findIndex(celebrity => celebrity.id === id);
  contactsCopy.splice(contactIndex, 1)
  this.setState(() => ({
    celebrities: contactsCopy
  }))
}



render() {

  const contactList = this.state.celebrities.map((celebrity, index) => (
    <table className='table' key={celebrity.id}>
  
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
      </tr>
      <tr>
        <td><img style={{width: '50px'}} src={celebrity.pictureUrl} alt="profile photo"/></td>
        <td>{celebrity.name}</td>
        <td>{celebrity.popularity.toFixed(2)}</td>
        <td></td>
      </tr>
      <button style={{marginTop:'20%'}} className="button is-danger is-light" onClick={() => { this.deleteContact(celebrity.id) }}>Delete</button>

    </table>
  ))

  
  return (
    <section>
    
    <div style={{  marginLeft: '10%'}}>

        <h1 className='header'>IronContacts</h1>
        <button className="button is-black" onClick={this.addContact}>Add Random Contact</button>
        <button className="button is-black" onClick={this.sortByName}>Sort by name</button>
        <button className="button is-black" onClick={this.sortByPopularity}>Sort by popularity</button>

    </div>
  
  <div class="columns is-mobile is-centered">
  <div class="column is-half">
    
    {contactList}
  
    </div>
  </div>
    </section>
    
  );
}
}

export default App;
