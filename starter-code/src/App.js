import React, { Component } from 'react';
import './App.css';
import ActorsList from './components/Contacts'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <section>

          <div>
            <ActorsList />
          </div>

        </section>
      </React.Fragment>
    )
  }
}

export default App;