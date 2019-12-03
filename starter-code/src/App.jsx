import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactTable from './components/ContactTable';

class App extends Component {
  render() {
    return (
      <div >
        <ContactTable/>
      </div>
    );
  }
}

export default App;
