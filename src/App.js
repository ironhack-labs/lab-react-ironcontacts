import React, { Fragment } from 'react';
import './App.css';
import contacts from './contacts.json';


class App extends React.Component {
  
  
  state = {
    contact: contacts.slice(0, 5)
}

celebs = () => {
  return this.state.contact.map((cont, index) => {
    return <tr>
    <td><img src={cont.pictureUrl} alt="" /></td>
    <td>{cont.name}</td>
    <td>{cont.popularity}</td>
    </tr>
  })
}

render() {
  return (
  <div>
    <table>
      <thead>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
      </tr>
      </thead>
    <tbody>
    {this.celebs()}
    </tbody>
  </table>
</div>
  )
}
}

export default App;
