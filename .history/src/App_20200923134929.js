import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import CelebritiesList from './Components/CelebritiesList';

export default class App extends React.Component {
  state = {
    celebrities: contacts.slice(0, 5),
  };

  render() {
    return (
      <div>
        <div className="btn-container">
          <div>
            <button className="btn" onClick={this.addRandomCelebrity}>
              Add a random contact
            </button>
          </div>

          <div>
            <button className="btn" onClick={this.sortBynameCelebrity}>
              Sort By Name
            </button>
          </div>

          <div>
            <button className="btn" onClick={this.sortByPopularityCelebrity}>
              Sort By Popularity
            </button>
          </div>
        </div>

        <div>
          <h1>Iron Contacts</h1>
          <CelebritiesList celebrities={this.state.celebrities} />
        </div>
      </div>
    );
  }
}
