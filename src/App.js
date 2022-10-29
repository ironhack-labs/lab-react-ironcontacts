import "./App.css";
import contactsData from "./contacts.json";

let contacts = [];

for (let i = 0; i < 5; i++) {
  contacts.push(contactsData[i]);
  contacts[i].popularity = parseFloat(contacts[i].popularity).toFixed(2);
}

function addRandomContact(fromArr, toArr) {
  const randomIndex = Math.floor(Math.random() * fromArr.length);
  toArr.push(fromArr[randomIndex])
  toArr[toArr.length - 1].popularity = parseFloat(toArr[toArr.length - 1].popularity).toFixed(2);
  console.log(toArr)
}

function App() {
  return (
    <div className="App">      
      <h1>IronContacts</h1>
      <button onClick={addRandomContact(contactsData, contacts)}>Add Random Contact</button>
      <table className="contactsTable">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {" "}
              <img
                className="profilePicture"
                src={contacts[0].pictureUrl}
                alt={`${contacts[0].name}`}
              />
            </td>
            <td>{contacts[0].name}</td>
            <td>{contacts[0].popularity}</td>
            {contacts[0].wonOscar ? <td>🏆</td> : <td></td>}
            {contacts[0].wonEmmy ? <td>🏆</td> : <td></td>}
          </tr>
          <tr>            
            <td>
              {" "}
              <img
                className="profilePicture"
                src={contacts[1].pictureUrl}
                alt={`Profile of ${contacts[1].name}`}
              />
            </td>
            <td>{contacts[1].name}</td>
            <td>{contacts[1].popularity}</td>
            {contacts[1].wonOscar ? <td>🏆</td> : <td></td>}
            {contacts[1].wonEmmy ? <td>🏆</td> : <td></td>}
          </tr>
          <tr>
            <td>
              {" "}
              <img
                className="profilePicture"
                src={contacts[2].pictureUrl}
                alt={`Profile of ${contacts[2].name}`}
              />
            </td>
            <td>{contacts[2].name}</td>
            <td>{contacts[2].popularity}</td>
            {contacts[2].wonOscar ? <td>🏆</td> : <td></td>}
            {contacts[2].wonEmmy ? <td>🏆</td> : <td></td>}
          </tr>
          <tr>
            <td>
              {" "}
              <img
                className="profilePicture"
                src={contacts[3].pictureUrl}
                alt={`Profile of ${contacts[3].name}`}
              />
            </td>
            <td>{contacts[3].name}</td>
            <td>{contacts[3].popularity}</td>
            {contacts[3].wonOscar ? <td>🏆</td> : <td></td>}
            {contacts[3].wonEmmy ? <td>🏆</td> : <td></td>}
          </tr>
          <tr>
            <td>
              {" "}
              <img
                className="profilePicture"
                src={contacts[4].pictureUrl}
                alt={`Profile of ${contacts[4].name}`}
              />
            </td>
            <td>{contacts[4].name}</td>
            <td>{contacts[4].popularity}</td>
            {contacts[4].wonOscar ? <td>🏆</td> : <td></td>}
            {contacts[4].wonEmmy ? <td>🏆</td> : <td></td>}
          </tr>          
        </tbody>
      </table>
    </div>
  );
}
export default App;
