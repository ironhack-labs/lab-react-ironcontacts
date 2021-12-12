import contacts from "./contacts.json";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [addContact, setAddContact] = useState(contacts.slice(0, 5)); //addContact es el valor inicial

  const contactos = contacts;

  const aleatorio = Math.floor(Math.random() * contactos.length);

  // Añadir random
  const addRandomContact = (e) => {
    e.preventDefault();
    setAddContact([...addContact, contactos[aleatorio]]);

    return console.log(addContact);
  };

  // Ordenar por nombre
  const sortByName = (e) => {
    // e.preventDefault() solo es importante cuando se hace un submit
    const sortedByName = addContact.sort((a, b) => {
      return a.name < b.name ? -1 : 1;
    });

    setAddContact([...addContact]);
  };

  // Ordenar por popularidad
  const sortByPopularity = (e) => {
    // e.preventDefault()
    const sortedByPopularity = addContact.sort(
      (a, b) => a.popularity - b.popularity
    );

    setAddContact([...addContact]);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Iron Contacts</h1>

      {/* botones */}
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          marginTop: "20px",
          marginLeft: "20%",
          flexDirection: "row",
          alignItems: "center",
          alignContent: "space between",
        }}
      >
        <button
          onClick={(event) => {
            addRandomContact(event);
          }}
        >
          Añadir contacto
        </button>
        <button
          onClick={(event) => {
            sortByName(event);
          }}
        >
          Ordenar por nombre
        </button>
        <button
          onClick={(event) => {
            sortByPopularity(event);
          }}
        >
          Ordenar por popularidad
        </button>
      </div>

      {/* títulos */}
      <div style={{ display: "flex", flexDirection: "row", marginLeft: "20%" }}>
        <h2 style={{ marginRight: "50px" }}>Picture</h2>
        <h2 style={{ marginRight: "50px" }}>Name</h2>
        <h2>Popularity</h2>
      </div>

      {/* lista de contactos */}
      {addContact.map((e) => {
        return (
          <>
            <div
              key={e.id}
              style={{
                display: "flex",
                justifyContent: "left",
                marginTop: "20px",
                marginLeft: "20%",
                flexDirection: "row",
                alignItems: "center",
                alignContent: "space between",
              }}
            >
              <img
                src={e.pictureUrl}
                alt=""
                style={{
                  maxHeight: "150px",
                  width: "auto",
                  marginRight: "30px",
                }}
              ></img>
              <p style={{ marginRight: "30px" }}>{e.name}</p>
              <p>{e.popularity.toFixed(2)}</p>
              {console.log(e)}
            </div>
          </>
        );
      })}
    </>
  );
}

export default App;
