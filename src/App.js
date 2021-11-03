import './App.css';
import contacts from "./contacts.json";


let shortArr = contacts.slice(0, 5)
console.log(shortArr);

function NewContacts(props) {
    return(
      <>
        <tr>
          <img src={props.pictureUrl} width="50px"/>
          <td>{props.name}</td>
          <td>{props.popularity.toFixed(2)}</td>
        </tr>
      </>
    )
}


function App() {
  return (
    <>
      <div className="App">
        <h1>Iron Contacts</h1>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
              {shortArr.map((elem) => {
                return (
                  <NewContacts 
                    pictureUrl = {elem.pictureUrl} 
                    name = {elem.name} 
                    popularity = {elem.popularity}/>);
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
