import './App.css';
import contacts from "./contacts.json";

const arrFromContact = contacts.slice(0, 5);

const pickRandom = () => {
  const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
  arrFromContact.push(randomContact);
  console.log(arrFromContact)
}

function App() {
  return (
    <div className="tContainer">
      <h2>Ironhack Contacts</h2>

      <button onClick={pickRandom} className="random-btn">Add Random Contact</button>
      <table>
        <tr className="table-header">
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        <tr>
          <td><img className="imgClass" src={arrFromContact[0].pictureUrl} alt="image1" /></td>
          <td>{arrFromContact[0].name}</td>
          <td>{arrFromContact[0].popularity}</td>
        </tr>
        <tr>
          <td><img className="imgClass" src={arrFromContact[1].pictureUrl} alt="image1" /></td>
          <td>{arrFromContact[1].name}</td>
          <td>{arrFromContact[1].popularity}</td>
        </tr>
        <tr>
          <td><img className="imgClass" src={arrFromContact[2].pictureUrl} alt="image1" /></td>
          <td>{arrFromContact[2].name}</td>
          <td>{arrFromContact[2].popularity}</td>
        </tr>
        <tr>
          <td><img className="imgClass" src={arrFromContact[3].pictureUrl} alt="image1" /></td>
          <td>{arrFromContact[3].name}</td>
          <td>{arrFromContact[3].popularity}</td>
        </tr>
        <tr>
          <td><img className="imgClass" src={arrFromContact[4].pictureUrl} alt="image1" /></td>
          <td>{arrFromContact[4].name}</td>
          <td>{arrFromContact[4].popularity}</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
