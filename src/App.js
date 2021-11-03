import './App.css';
import contacts from "./contacts.json";

const initialContacts = contacts.slice(0,5)
// console.log(initialContacts[5].pictureUrl)

function App() {
  return (

    <div className="container">

      <table className="table">
        <h1>IronContacts</h1>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        <tr>
          <td><img src={initialContacts[0].pictureUrl} alt="" /></td>
          <td>{initialContacts[0].name}</td>
          <td>{initialContacts[0].popularity}</td>
        </tr>

        <tr>
          <td><img src={initialContacts[1].pictureUrl} alt="" /></td>
          <td>{initialContacts[1].name}</td>
          <td>{initialContacts[1].popularity}</td>
        </tr>

        <tr>
          <td><img src={initialContacts[2].pictureUrl} alt="" /></td>
          <td>{initialContacts[2].name}</td>
          <td>{initialContacts[2].popularity}</td>
        </tr>

        <tr>
          <td><img src={initialContacts[3].pictureUrl} alt="" /></td>
          <td>{initialContacts[3].name}</td>
          <td>{initialContacts[3].popularity}</td>
        </tr>

        <tr>
          <td><img src={initialContacts[4].pictureUrl} alt="" /></td>
          <td>{initialContacts[4].name}</td>
          <td>{initialContacts[4].popularity}</td>
        </tr>

      </table>

    </div>


  );
}

export default App;
