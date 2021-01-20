import React from 'react';
import './App.css';
import contacts from './contacts.json';



class App extends React.Component {


  render() {

    const movieContacts = contacts.slice(0,5).map(value => {
      return(
    
        <tr>
          <td><img src={value.pictureUrl}/></td>
          <td>{value.name}</td>
          <td>{Math.round(value.popularity * 100) / 100}</td>
        </tr>

      ) 
    })

    return (
      <div className="App" >
      <h1>IronContacts</h1>
        <div className="Contacts">
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {movieContacts}
        </div>
      </div>
    );
  }
}

export default App;

