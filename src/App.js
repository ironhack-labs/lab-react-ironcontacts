import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import ContactsList from './components/ContactsList';

function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        <tr>
          <td>
            <ContactsList />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
