import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import contacts from './contacts.json';

const firstFiveContactsArr = contacts.slice(1, 6);

const roundedPopularity=(_number)=>Math.round((_number)*100)/100

firstFiveContactsArr.forEach(roundedPopularity)

class App extends React.Component {
  state = {
    contacts: firstFiveContactsArr
  };

  render() {
   
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <tr>
          <td>Picture</td>
          <td>Name</td>
          <td>Popularity</td>
        </tr>
        <tr>
          <td>
            <img src={contacts[0].pictureUrl} alt={contacts[0].name} />
          </td>
          <td>{contacts[0].name}</td>
          <td>{roundedPopularity(contacts[0].popularity)}</td>
        </tr>
        <tr>
          <td>
            <img src={contacts[1].pictureUrl} alt={contacts[0].name} />
          </td>
          <td>{contacts[1].name}</td>
          <td>{roundedPopularity(contacts[1].popularity)}</td>
        </tr>
        <tr>
          <td>
            <img src={contacts[2].pictureUrl} alt={contacts[0].name} />
          </td>
          <td>{contacts[2].name}</td>
          <td>{roundedPopularity(contacts[2].popularity)}</td>
        </tr>
        <tr>
          <td>
            <img src={contacts[3].pictureUrl} alt={contacts[0].name} />
          </td>
          <td>{contacts[3].name}</td>
          <td>{roundedPopularity(contacts[3].popularity)}</td>
        </tr>
        <tr>
          <td>
            <img src={contacts[4].pictureUrl} alt={contacts[0].name} />
          </td>
          <td>{contacts[4].name}</td>
          <td>${roundedPopularity(contacts[4].popularity)}</td>
        </tr>
      </div>
    );
  }
}



export default App;
