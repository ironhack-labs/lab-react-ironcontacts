import React, { Component } from 'react';
import './App.css';
import CelebrityRows from './Components/CelebrityRows';


class App extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          <CelebrityRows rows="5"/>
        </tbody>
      </table>
    );
  }
}

export default App;
