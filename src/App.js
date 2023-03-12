// src/App.js
import "./App.css";
import contactsArr from "./contacts.json";

const contacts = contactsArr.slice(5, 10);

function App() {
  console.log(contacts);

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Popularity</th>
            <th scope="col">Won an Oscar</th>
            <th scope="col">Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr>
                <td>
                  <img className="picture" src={contact.pictureUrl} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>
                  {contact.wonOscar ? <i className="bi bi-trophy-fill" /> : " "}
                </td>
                <td>
                  {contact.wonEmmy ? (
                    <i className="bi bi-trophy-fill"></i>
                  ) : (
                    " "
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
