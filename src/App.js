import './App.css';
import contacts from "./contacts.json";

const contactsArr = contacts.slice(0, 5); 

function App() {
  return (
    <div className="App">
    <h1> IronContacts </h1>
    <table className="table-list">
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
      </tr>
      <tr>
        <td><img className="contacts-img" src={contactsArr[0].pictureUrl} alt="img"/></td>
        <td>{contactsArr[0].name}</td>
        <td>{contactsArr[0].popularity.toFixed(2)}</td>
     </tr>
     <tr>
        <td><img className="contacts-img" src={contactsArr[1].pictureUrl}alt="img"/></td>
        <td>{contactsArr[1].name}</td>
        <td>{contactsArr[1].popularity.toFixed(2)}</td>
     </tr>
     <tr>
        <td><img className="contacts-img" src={contactsArr[2].pictureUrl}alt="img"/></td>
        <td>{contactsArr[2].name}</td>
        <td>{contactsArr[2].popularity.toFixed(2)}</td>
     </tr>
     <tr>
        <td><img className="contacts-img" src={contactsArr[3].pictureUrl}alt="img"/></td>
        <td>{contactsArr[3].name}</td>
        <td>{contactsArr[3].popularity.toFixed(2)}</td>
     </tr>
     <tr>
        <td><img className="contacts-img" src={contactsArr[4].pictureUrl}alt="img"/></td>
        <td>{contactsArr[4].name}</td>
        <td>{contactsArr[4].popularity.toFixed(2)}</td>
     </tr>

    </table>
 
    </div>
  );
}

export default App;
