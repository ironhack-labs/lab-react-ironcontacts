import React from 'react';
import './App.css';
import contacts from './contacts.json';
let contactsArr = [{}];
for (let i=0; i<5; i++){
  contactsArr[i] = ({pictureUrl: contacts[i].pictureUrl, name: contacts[i].name, popularity: contacts[i].popularity} )
  console.log("contactsArr", contactsArr)
}


const App = () => {
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
        {contactsArr.map((el, i) => {
          return (
            <tr key={contactsArr[i].id}>
              <td>
                <img src={contactsArr[i].pictureUrl} />
              </td>
              <td>{contactsArr[i].name}</td>
              <td>{contactsArr[i].popularity}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default App;
