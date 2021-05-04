import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";


function App() {
  const contactsList = [];
  for (let i = 0; i<5; i++){
    contactsList.push(contacts[i])
  } 
  console.log(contactsList);
  return (
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
      </thead>
      <tbody>
        {contactsList.map(contact => {
          return (
            <tr>
              <td><img src={contact.pictureUrl}></img></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}
{}
export default App;
