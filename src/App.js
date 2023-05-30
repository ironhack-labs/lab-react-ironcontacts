// src/App.js
import "./App.css";
import allContacts from "./contacts.json";

const contacts = [
  {
    name: "Idris Elba",
    pictureUrl: "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
    popularity: 11.622713,
    id: "11731993-0604-4bee-80d5-67ad845d0a38",
    wonOscar: false,
    wonEmmy: false
  },
  {
    name: "Johnny Depp",
    pictureUrl: "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
    popularity: 15.656534,
    id: "7dad00f7-3949-477d-a7e2-1467fd2cfc06",
    wonOscar: false,
    wonEmmy: false
  },
  {
    name: "Monica Bellucci",
    pictureUrl: "https://image.tmdb.org/t/p/w500/qlT4904d8oi2NIs28RrgnIZDFZB.jpg",
    popularity: 16.096436,
    id: "0ad5e441-3084-47a1-9e9b-b917539bba71",
    wonOscar: false,
    wonEmmy: false
  },
  {
    name: "Gal Gadot",
    pictureUrl: "https://image.tmdb.org/t/p/w500/34kHAyBaBhq2kUrmhM15paEBuuI.jpg",
    popularity: 10.049256,
    id: "b497e3c4-50bb-4ae2-912f-eb36802c5bc2",
    wonOscar: false,
    wonEmmy: false
  },
  {
    name: "Ian McKellen",
    pictureUrl: "https://image.tmdb.org/t/p/w500/coWjgMEYJjk2OrNddlXCBm8EIr3.jpg",
    popularity: 10.070132,
    id: "0067ae32-97b6-4431-898e-eb1c10150abb",
    wonOscar: false,
    wonEmmy: false
  },
  {
    name: "Matt Damon",
    pictureUrl: "https://image.tmdb.org/t/p/w500/elSlNgV8xVifsbHpFsqrPGxJToZ.jpg",
    popularity: 9.500475,
    id: "fd998a8f-1c9f-4ad8-8a03-45f93b630aa1",
    wonOscar: true,
    wonEmmy: false
  }
];

function App() {
  return (
    <div className="App">
      <h1>IronContacts</h1>
      {contacts.map(contact => {
        return (
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Won Oscar</th>
                <th>Won Emmy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={contact.pictureUrl} alt="Contact Image" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar === true ? <span>🏆</span> : null}</td>
                <td>{contact.wonEmmy === true ? <span>🏆</span> : null}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
}
export default App;
