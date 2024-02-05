import { useState } from "react";
import contacts from "./contacts.json";
import "./App.css";

function App() {
  const [people, setPeople] = useState(contacts.slice(0, 5));
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
        {people.map((person) => {
          return (
            <tr>
              <td>
                <img id="actor_img" src={person.pictureUrl} />
              </td>
              <td>{person.name}</td>
              <td>{person.popularity}</td>
              <td>{person.wonOscar && <p>🏆</p>}</td>
              <td>{person.wonEmmy && <p>🌟</p>}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;

// import contactsData from "./contacts.json";
// import "./App.css";

// function people() {
//   const [people, setPeople] = useState(contactsData);

//   return (
//     <div>
//       <h2>Movie List</h2>

//       {movies.map((contactsData) => {
//         return (
//           <MovieCard
//             key={movieData._id}
//             movie={movieData}
//             deleteMovie={deleteMovie}
//           />
//         );
//       })}
//     </div>
//   );
// }

// export default App;
