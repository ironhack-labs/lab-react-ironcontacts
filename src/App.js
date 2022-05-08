import './App.css';
import contactList from './contacts.json';

function App(props) {

  const { name, pictureUrl, popularity, id, wonOscar, wonEmmy } = props;
  const firstFiveContactsArray = [contactList[0], contactList[1], contactList[2], contactList[3], contactList[4]];

  return (
    <div className="App">
      <h2> List of Contacts </h2>
      <table>
                  <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th> 
                  </tr>

                  { firstFiveContactsArray.map(()=> {
                    return (
                  <tr>
                    <td>{pictureUrl}</td>
                    <td>{name}</td>
                    <td>{popularity}</td>
                  </tr>
                    )
                  })}

               </table>

    </div>
  );
}

export default App;
