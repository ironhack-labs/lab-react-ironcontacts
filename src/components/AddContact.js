import React, { useState } from "react";
import Contact from "./Contact";

//me confundi yo estaba creando un personaje
const AddContact = () => {
  // 1. HOOKS
  const [addContact, setAddContact] = useState({
    name: "",
    pictureUrl: "",
    popularity: "",
  });

  const [listContacts, setListContacts] = useState([]);
  // 2. FORMULARIO

  // 3. CRUD
  //Leer Data ingresada por el usuario, mediante el evento
  const getUserData = (e) => {
    return setAddContact({
      //clonamos la data existente
      ...addContact,
      //mandamos en el input con x name lo que capture en su value
      //el name lo definimos en el input
      [e.target.name]: e.target.value,
    });
  };

  //CREAR
  const generateContact = (e) => {
    //evitamos el comportamiento por defecto del form
    e.preventDefault();

    setListContacts([...listContacts, addContact]);

    setAddContact({
      name: "",
      pictureUrl: "",
      popularity: "",
    });
  };

  // 4. RETORNO

  return (
    <>
      <form
        onSubmit={(event) => {
          generateContact(event);
        }}
      >
        <label>Name:</label>
        <input
          name="name"
          value={addContact.name}
          onChange={(event) => {
            getUserData(event);
          }}
        />
        <br />
        <label>Image:</label>
        <input
          name="pictureUrl"
          value={addContact.pictureUrl}
          onChange={(event) => {
            getUserData(event);
          }}
        />
        <br />
        <label>Popularity:</label>
        <input
          name="popularity"
          value={addContact.popularity}
          onChange={(event) => {
            getUserData(event);
          }}
        />
        <br />
        <button>Add Contact</button>
      </form>

      {listContacts.map(({ name, pictureUrl, popularity, id }) => {
        return (
          <Contact
            key={id}
            name={name}
            pictureUrl={pictureUrl}
            popularity={popularity}
            id={id}
          />
        );
      })}
    </>
  );
};

export default AddContact;
