import { useState } from "react";
import "./App.css";
import allContacts from "./contacts.json";

const FiveContacts = allContacts.slice(0, 5);

function App() {
  const [contacts, setContacts] = useState(FiveContacts);
  return (
    <div className="App">
      <button
        onClick={() => {
          // to do think about using splice for this particular thing
          // it filters inside of all the contents
          const newContacts = allContacts.filter((c) => {
            // return false if we already show this contact
            if (contacts.includes(c)) return false;
            else return true;
          });
          // console.log(newContacts.length, contacts.length);
          // this is the way to get the random contacts math.floor does the "round"
          const random = Math.random();
          const randomIndex = Math.floor(random * newContacts.length);
          const randomContact = newContacts[randomIndex];
          const updatedContacts = [...contacts, randomContact];
          // ... if im already inside a squared brackets to declare a new array it creates a new one
          setContacts(updatedContacts);
        }}
      >
        Add Random
      </button>
      <button
        // Sort by name very useful use of slice
        onClick={() => {
          const sortedContacts = contacts.slice().sort((a, b) => {
            // sort returns the same array calls slice first to make a copy of it
            const nameA = a.name;
            const nameB = b.name;
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          });
          setContacts(sortedContacts);
        }}
      >
        Sort by name
      </button>
      <button
        onClick={() => {
          const popContacts = contacts.slice().sort((a, b) => {
            // sort returns the same array calls slice first to make a copy of it
            const popularityA = a.popularity;
            const popularityB = b.popularity;
            if (popularityA > popularityB) {
              return -1;
            }
            if (popularityA < popularityB) {
              return 1;
            }
            return 0;
          });
          setContacts(popContacts);
        }}
      >
        Sort by popularity
      </button>

      <table>
        <thead>
          <tr>
            <th>picture</th>
            <th>name</th>
            <th>popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <tr key={c.id}>
              <td>
                <img src={c.pictureUrl} alt="pic" />
              </td>
              <td>{c.name}</td>
              <td>{c.popularity}</td>
              <td>{c.wonOscar && "🏆"}</td>
              <td>{c.wonEmmy && "🏆"}</td>
              {/* <td>{c.wonEmmy ? "🏆" : null}</td> */}
              <td>
                <button
                  // adding the delete button
                  onClick={() => {
                    const remainingContacts = contacts.filter((d) => {
                      // return false if we click on the delete button for this specific contact

                      if (d.id === c.id) return false;
                      return true;
                    });
                    setContacts(remainingContacts);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
