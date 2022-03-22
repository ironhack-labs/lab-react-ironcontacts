import './App.scss';
import contacts from './contacts.json';

function App() {
  const firstFiveContacts = [...contacts].splice(0, 5);

  return (
    <div className="app wrapper">

      <h1>IronContacts</h1>
      <div className="table">
        <table>
          <thead>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
          </thead>
          <tbody>
            {firstFiveContacts.map(({ pictureUrl, name, popularity }, index) => {
              return <tr key={index} >
                <td><img src={pictureUrl} className="table__img" alt="contact" /></td>
                <td>{name}</td>
                <td>{popularity.toFixed(2)}</td>
              </tr>
            })}
          </tbody> 
        </table>


      </div>

    </div>
  );
}

export default App;
