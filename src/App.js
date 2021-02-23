import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';


const ContactGenerator = ({name, pictureUrl, popularity}) => {
  return (
  <tr>
      <td><img src={pictureUrl} alt={name} className="profile-img"/></td>
      <td>{name}</td>
      <td>{popularity}</td>
    </tr>
  )
};

const ContactList = (props) => {
  return props.contacts.map(contact => {
    return (<ContactGenerator key={contact.id} {...contact} />);
  });
};



function App() {
  const first5Contacts = contacts.slice(0, 10);

  return (
    <div className="App">
      <div className="contacts">
        <h1>IronContacts</h1>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            <ContactList contacts={first5Contacts} />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
