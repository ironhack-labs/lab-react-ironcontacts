import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import Celebrities from './components/Celebrities.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="celebrities">
          <h1>Ironcontacts</h1>
        </div>
        <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr> 
        {/* <div className="celebrities"> */}
          {contacts.slice(0, 5).map((contacts)=>
          <Celebrities 
            name= {contacts.name}
            pictureUrl={contacts.pictureUrl}
            popularity={contacts.popularity}
          />
          )}
        {/* </div> */}
        </table>
      </div>
    );
  }
}

export default App;
