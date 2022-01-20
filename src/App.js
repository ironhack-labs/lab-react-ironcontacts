import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";

function App() {
  const slicedArray = contacts.slice(0, 4);
  return (
    <div className="App">
      Iron Contacts
      <table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Photo</th>
            <th>Popularity</th>
        </tr>
    </thead>
    <tbody>
   
    {slicedArray.map((c)=>(
        <tr>
        <td> <img src={c.pictureUrl}></img>  </td>
        <td> {c.name} </td>
        <td> {Math.round(c.popularity * 100) / 100}</td>
      </tr>

      ))}
        
    </tbody>
</table>
    </div>
  );
}

export default App;
