// src/App.js
import "./App.css";
import contacts from './contacts.json'
const fiveContacts = contacts.filter((e, index) => {return index < 5})
// console.log(contacts);
console.log(fiveContacts);
function App() {
  return (
    <div className="App">
      <h2>IronContacts</h2>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
        {contacts.map((contactObj) => {
          return(
              <tr>
                <td>
                  <img src={contactObj.pictureUrl} className="faceImg"></img>
                </td>
                <td>
                  {contactObj.name}
                </td>
                <td>
                  {contactObj.popularity}
                </td>
                <td>
                  {contactObj.wonOscar === true && <p>🏆</p>}
                </td>
                <td>
                  {contactObj.wonEmmy === true && <p>🏆</p>}
                </td>
              </tr>
          )
        })}
      </table>
    </div>
  )
}
export default App;