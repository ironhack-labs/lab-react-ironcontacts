import "./App.css";
import contacts from "./contacts.json";

function App() {
  return (
    <div className="App">
      <table data-table-theme="dark zebra">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Have won an Oscar</th>
            <th>Have won an Emmy</th>
          </tr>
        </thead>
        {contacts.map((contact) => {
          return (
            <tr>
              <th>
                <img src={contact.pictureUrl} alt="" />
              </th>
              <th>{contact.name}</th>
              <th>{contact.popularity}</th>
              <th>{contact.wonOscar ? "🏆" : null}</th>
              <th>{contact.wonEmmy ? "🏆" : null}</th>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
export default App;
