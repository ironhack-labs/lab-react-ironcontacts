import "./App.css";
import contacts from "./contacts.json";

let shortContactsList = contacts.splice(0,5)
console.log(shortContactsList[0].name)

// function Table(){
//   return (
//     <table className="table">
//         <thead>
//           <tr>
//             <th>
//               <h2>Picture</h2>
//             </th>
//             <th>
//               <h2>Name</h2>
//             </th>
//             <th>
//               <h2>Popularity</h2>
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>1</td>
//             <td>2</td>
//             <td>3</td>
//           </tr>
//           <tr>
//             <td>1</td>
//             <td>2</td>
//             <td>3</td>
//           </tr>
//           <tr>
//             <td>1</td>
//             <td>2</td>
//             <td>3</td>
//           </tr>
//           <tr>
//             <td>1</td>
//             <td>2</td>
//             <td>3</td>
//           </tr>
//           <tr>
//             <td>1</td>
//             <td>2</td>
//             <td>3</td>
//           </tr>
//         </tbody>
//       </table>
//   )
// }


function App() {
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table className="table">
        <thead>
          <tr>
            <th>
              <h2>Picture</h2>
            </th>
            <th>
              <h2>Name</h2>
            </th>
            <th>
              <h2>Popularity</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img className="thumbnails" src={shortContactsList[0].pictureUrl}/></td>
            <td>{shortContactsList[0].name}</td>
            <td>{shortContactsList[0].popularity}</td>
          </tr>
          <tr>
            <td><img className="thumbnails" src={shortContactsList[1].pictureUrl}/></td>
            <td>{shortContactsList[1].name}</td>
            <td>{shortContactsList[1].popularity}</td>
          </tr>
          <tr>
            <td><img className="thumbnails" src={shortContactsList[2].pictureUrl}/></td>
            <td>{shortContactsList[2].name}</td>
            <td>{shortContactsList[2].popularity}</td>
          </tr>
          <tr>
            <td><img className="thumbnails" src={shortContactsList[3].pictureUrl}/></td>
            <td>{shortContactsList[3].name}</td>
            <td>{shortContactsList[3].popularity}</td>
          </tr>
          <tr>
            <td><img className="thumbnails" src={shortContactsList[4].pictureUrl}/></td>
            <td>{shortContactsList[4].name}</td>
            <td>{shortContactsList[4].popularity}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
