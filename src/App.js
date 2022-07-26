import contacts from "./contacts.json";
import { useState } from "react";
import './App.css';



function App() {

  const [contactsArr, setContact] = useState(contacts.slice(0, 5));



  return (
    <>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
        {contactsArr.map((e) => {
          return (
            <><tr>
              <td><img src={e.pictureUrl}></img></td>
              <td>{e.name}</td>
              <td>{e.popularity}</td>
              <td>{e.wonOscar ? <>🏆</> : <>😢</>}</td>
              <td>{e.wonEmmy ? <>🏆</> : <>😢</>}</td>
            </tr>
            </>
          )
        })}

      </table>

    </>
  );
}

export default App;
