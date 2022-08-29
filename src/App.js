import "./App.css";
import Contacts from './components/Contacts'
function App() {
  
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button>Add Random Contact</button>
      <table>
        <thead>
          <tr key="title">
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        
          <Contacts />
      
      </table>
    </div>
  );
}

export default App;
