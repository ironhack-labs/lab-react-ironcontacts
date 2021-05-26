import "./App.css";
import React, { useState } from "react";
import contacts from "./contacts.json";

function App() {
  //1. Hooks
  //   const [allContacts, setAllContacts] = useState({
  //     name: "",
  //     pictureUrl: "",
  //     popularity: "",
  //     id: ""
  // })
  const [allContacts, setAllContacts] = useState([
    {
      name: "Idris Elba",
      pictureUrl:
        "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
      popularity: 11.622713,
      id: "11731993-0604-4bee-80d5-67ad845d0a38",
    },
    {
      name: "Johnny Depp",
      pictureUrl:
        "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
      popularity: 15.656534,
      id: "7dad00f7-3949-477d-a7e2-1467fd2cfc06",
    },
    {
      name: "Monica Bellucci",
      pictureUrl:
        "https://image.tmdb.org/t/p/w500/qlT4904d8oi2NIs28RrgnIZDFZB.jpg",
      popularity: 16.096436,
      id: "0ad5e441-3084-47a1-9e9b-b917539bba71",
    },
    {
      name: "Gal Gadot",
      pictureUrl:
        "https://image.tmdb.org/t/p/w500/34kHAyBaBhq2kUrmhM15paEBuuI.jpg",
      popularity: 10.049256,
      id: "b497e3c4-50bb-4ae2-912f-eb36802c5bc2",
    },
    {
      name: "Ian McKellen",
      pictureUrl:
        "https://image.tmdb.org/t/p/w500/coWjgMEYJjk2OrNddlXCBm8EIr3.jpg",
      popularity: 10.070132,
      id: "0067ae32-97b6-4431-898e-eb1c10150abb",
    },
  ]);
  //3.Crud
  const addRandom = () => {
    let random = Math.round(Math.random() * contacts.length);
    setAllContacts([...allContacts, contacts[random]]);
  };

  const sortName = () => {
    allContacts.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    setAllContacts([...allContacts]);
  };

  const sortPopularity = () => {
    allContacts.sort(function (a, b) {
      return b.popularity - a.popularity;
    });
    setAllContacts([...allContacts]);
  };

  const deleteContact = (id) => {
    const newArray = allContacts.filter((item) => {
      return id !== item.id;
    });
    setAllContacts(newArray);
  };

  return (
    <div className="container">
      <h1>IronContacts</h1>
      <button className="btn btn-info m-3" onClick={() => addRandom()}>
        Add Random Contact
      </button>
      <button className="btn btn-info m-3" onClick={() => sortName()}>
        Sort by Name
      </button>
      <button className="btn btn-info m-3" onClick={() => sortPopularity()}>
        Sort by Popularity
      </button>
      <table className="table caption-top">
        <caption></caption>
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Popularity</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {allContacts.map((e) => {
            return (
              <tr key={e.id}>
                <td>
                  <img src={e.pictureUrl} alt="" style={{ width: `100px` }} />
                </td>
                <td>{e.name}</td>
                <td>{e.popularity.toFixed(2)}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => deleteContact(e.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
