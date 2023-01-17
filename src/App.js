import "./App.css";
import contactsFromJson from "./contacts.json";
function App() {
  //console.log(contactsFromJson);
  const firstFive = contactsFromJson.slice(0, 5);
  console.log(firstFive);

  return (
    <div className="App">
      <h1>Contacts :</h1>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
      </table>
      {firstFive.map((contactDetails) => {
        return (
          <div className="Contact">
            <table className="Contact-table">
              <tr>
                <td>
                  <img src={contactDetails.pictureUrl} alt="" />
                </td>
                <td>{contactDetails.name}</td>
                <td> {contactDetails.popularity}</td>
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
}

export default App;
