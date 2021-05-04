import React from 'react';
import './App.css';
import Contacts from './contacts.json'

function App () {
  
const {pictureUrl, name, popularity} = Contacts

return(
    <div className="table">
      <table>
        <thead>
          <tr>Iron Contacts</tr>
        </thead>
        <tbody>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
          </tr>
          {Contacts.map((contacto) => {
            return(
              <tr>
                <td>{contacto.pictureUrl}</td>
                <td>{contacto.name}</td>
                <td>{contacto.popularity}</td>
              </tr>
            )
          }).slice(0, 5)}
        </tbody>
      </table>
    </div>
  )
}

export default App;