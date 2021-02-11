import React from 'react';
import contacts from '../../contacts.json';
import "./IronContacts.css"



export default function IronContacts() {
const [fiveFirst, setFiveFirst] = React.useState(contacts.slice(0, 5));


// add random function
var randomIndex = contacts[Math.floor(Math.random() * contacts.length)];
const buttonAdd = () => setFiveFirst(state => state.concat(randomIndex))
// delete function
const buttonDelete = (contactId) => setFiveFirst(state => state.filter(contact => contactId !== contact.id))

// callback to sort by key
function dynamicSort(property) {
  var sortOrder = 1;
  if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
  }
  return function (a,b) {
      var result = (a[property] > b[property]) ? -1 : (a[property] < b[property]) ? 1 : 0;
      return result * sortOrder;
  }
}
// sort by rate function
const buttonSortRate = () => setFiveFirst(fiveFirst => [...fiveFirst].sort(dynamicSort("popularity")))
// sort by name function
const buttonSortName = () => setFiveFirst(fiveFirst => [...fiveFirst].sort(dynamicSort("name")))

  return (
    <div className="table">
      <div className="button-div">
      <button className="button-marging" onClick={buttonAdd}>Add Random</button>
      <button className="button-marging" onClick={buttonSortRate}>Sort by Rate</button>
      <button className="button-marging" onClick={buttonSortName}>Sort by Name</button>
      </div>
    <table className="inline-table">
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {fiveFirst.map(function (i) {
          return (
            <tr key={i.id}>
              <td>
                <img src={i.pictureUrl} alt="contact face" width="70" height="100" />
              </td>
              <td>{i.name}</td>
              <td>{Math.round(i.popularity)}</td>
              <td><button onClick={() => buttonDelete(i.id)}>Delete</button></td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
}
