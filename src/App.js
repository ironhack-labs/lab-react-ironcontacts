import "./App.css";

import contacts from './contacts.json'

const fiveContacts = contacts.slice(0,5)


function App() {

  return <div className="App">
    <p>
    <table>
  <thead>
    <tr>
      <th>Picture</th>
      <th>Name</th>
      <th>Popularity</th>
      <th>Won Oscar?</th>
      <th>Won Emmy?</th>
    </tr>
  </thead>
  <tbody>
    {fiveContacts.map((e) =>{

      return (
    <tr key= {e.id} >
      <td><img src={e.pictureUrl} alt="celeb pic" /></td>
      <td>{e.name}</td>
      <td>{e.popularity.toFixed(2)}</td>
      <td>{e.wonOscar ?  '🏆' : '' } </td>  {/* using ternary operator */}
      <td>{e.wonEmmy && '🏆' }</td> {/*  using && operator */}
    </tr> )
   })}
  </tbody>
</table>

    </p>
  </div>;
}
export default App;