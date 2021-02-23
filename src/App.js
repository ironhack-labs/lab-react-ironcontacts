import './App.css';
import contacts from "./contacts.json";



function App() {
  return (
    <div className="App">
     
      <h1>Iron Contact</h1>

       {
        contacts.map((contact)=> {
          return <table>
          <th><img className="actorImg" src={contact.pictureUrl} img/> </th>

          <th className= "contact">{contact.name}</th>
          <th>{contact.popularity}</th>
          
    
          </table> 

        }).slice(0,5)}
  </div>   

  );
}

export default App;
