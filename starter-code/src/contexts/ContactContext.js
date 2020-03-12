import React, { createContext, useState } from 'react';

export const ContactContext = createContext();

const ContactContextProvider = (props) => {

  const [contacts, setContacts] = useState([
    {
      "name": "Idris Elba",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
      "popularity": 11.622713,
      "id": "11731993-0604-4bee-80d5-67ad845d0a38"
    },
    {
      "name": "Jessica Chastain",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/nkFrkn5NZVGWb4b2X0yIcXezhyt.jpg",
      "popularity": 8.324357,
      "id": "17980511-75ca-48b0-bea8-462fec2ee43d"
    }
  ]);

  return(
    <ContactContext.Provider value={{contacts}}>
      {props.children}
    </ContactContext.Provider>
  );
}


export default ContactContextProvider;