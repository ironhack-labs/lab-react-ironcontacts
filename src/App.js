
import './App.css';
import contactsData from "./contacts.json"

function App() {
 
      const copyContacts = [...contactsData];
      const fiveContacts = copyContacts.slice(0,5);
      return (
        <div className="App">
          <h1>Iron Contacts</h1>
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popular</th>
                <th>Won a Oscar</th>
                <th>Won a Emmy</th>
              </tr>
            </thead>
            <tbody>
              {fiveContacts.map(contact =>
                <tr>
                  <th><img src={contact.pictureUrl} alt="contact-details" className={'contactPicture'}/> </th>
                  <th>{contact.name}</th>
                  <th>{contact.popularity}</th>
                  <th>{contact.wonOscar ?  "🏆" : "❌"}</th>
                  <th>{contact.wonEmmy ? "🏆" : "❌"}</th>
                  </tr>
                )}
            </tbody>
          </table>
         
      </div>
  );
}

export default App;
