import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

function App() {

  const DisplayFiveContacts = (contacts) => {

    let list = [];

    for( let i =0; i <= 4; i++){

      list.push(  
        <tr> 
            <td> <img src={contacts[i].pictureUrl}/> </td>
            <td>{contacts[i].name} </td>
            <td>{contacts[i].popularity}  </td>
        </tr> 

       )
    }
    return list;

  }
  
  return (
    <div className="App">
      
      <table className="">
        <tr>
          <th>Picture </th>
          <th>Name </th>
          <th>Popularity </th>
          
        </tr>

      {DisplayFiveContacts(contacts)}
      </table>
      
    </div>
  );
}


export default App;
