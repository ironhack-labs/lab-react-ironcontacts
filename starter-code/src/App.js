import React, { Component } from 'react';
import './App.css';
import List from './components/List'
import contactList from './contacts.json'

/* let data = dataContacts.slice(0,4);
 */
class App extends Component {

  state = {
    contactsList : contactList
  }
  
  render() {
    return (
      <div className="App">
        {/* elementsDisplay = #number the elements we want to display */}
        <List data={this.state.contactsList} elementsDisplay={4}  />;
      </div>
    );
  }
}

export default App;
