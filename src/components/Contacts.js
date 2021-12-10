import React, { useState } from "react";
import contacts from "./../contacts.json";
import { Link } from 'react-router-dom'

const Contacts = () => {
  //---------------------------HOOKS--------------------------------
  const allContacts = contacts;
  const fiveCont = allContacts.slice(0, 5);
  const [dataCont, setDataCont] = useState(fiveCont);

  //console.log(fiveCont);
  //console.log(allContacts);
  const randomCont = allContacts[Math.floor(Math.random() * 53)];

  //console.log(randomCont);
     
  //------------------------FUNCTION--------------------------------
  const randomContact = (e) => {
    setDataCont([...dataCont, randomCont]);
  };

  const sortByName = (eName) => {
    const sortedNames = eName.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });
    setDataCont([...dataCont]);
    console.log(...dataCont);
    console.log(sortedNames);
  };

  const sortByPopularity = (c) => {
    const sortedPopular = c.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    return setDataCont([...dataCont]);
  };

  return (
    <>
      
        <h1 className="text-9xl"> IronContacts </h1>
        <button
          className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => randomContact()}
        >
          ADD
        </button>
        <button
          className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => sortByName(dataCont)}
        >
          Sort by Name
        </button>
        <button
          className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => sortByPopularity(dataCont)}
        >
          Sort by Popularity
        </button>
        {dataCont.map((e, index) => {
          return (
                <div className="p-20 bg-purple-100 w-full md:w-1/2">
                        <div className="bg-white rounded-lg shadow-lg">
                            <img src={e.pictureUrl} alt="algo"/>
                <div className="p-6">
                    <h2 className="font-bold mb-2 text-2xl text-purple-800">{e.name}
                    </h2>
                        <p className="text-purple-700 mb-2"><b>Popularity: </b>{e.popularity}</p>
                <button className="text-purple-600 hover:text-purple-500 underline text-sm">
                Delete 🗑
                </button>
                        </div>
                    </div>
                </div>  
            );
        })}
    </>
  );
};

export default Contacts;