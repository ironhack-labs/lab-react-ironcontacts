import React, { useState } from "react";

import con from "../contacts.json";

export const Contatos = () => {
  const [array, setArray] = useState(con.slice(0, 5));

  console.log(con);
  const random = () => {
    console.log("entro al random");
    let arrayNuevo = [];

    for (let index = 0; index < 5; index++) {
      arrayNuevo.push(con[Math.floor(Math.random() * (53 - 0) + 0)]);
    }

    setArray(arrayNuevo);
  };

  const orderName = () => {
    console.log("ordenar por nombre");

    const nuevo = [...array];
    const prueba = nuevo.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }

      if (a.name < b.name) {
        return -1;
      }
      return 0; //iguales
    });

    setArray(prueba);
  };

  const orderPopularity = () => {
    const nuevo = [...array];
    const prueba = nuevo.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1;
      }

      if (a.popularity > b.popularity) {
        return -1;
      }
      return 0; //iguales
    });

    setArray(prueba);
 
  };

  return (
    <div className="mt-5">
      <h1>IronContacts</h1>

      <div className="row mt-5 text-center">
        <div className="col-md-4">
          <button onClick={random} className="btn btn-dark">
            Add random Contact
          </button>
        </div>
        <div className="col-md-4">
          <button onClick={orderName} className="btn btn-dark">
            Sort by name
          </button>
        </div>
        <div className="col-md-4">
          <button onClick={orderPopularity} className="btn btn-dark">
            Sort by popularity
          </button>
        </div>
      </div>
      {array.map((e) => (
        <div className="card mb-3 mt-5">
          <div className="row g-0">
            <div className="col-md-3">
              <img
                src={e.pictureUrl}
                style={{
                  maxHeight: "40vh",
                  maxWidth: "40vw",
                  minWidth: "20vw",
                }}
              />
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <h5 className="card-title">Name: {e.name}</h5>

                <h5 className="card-title">Popularity : {e.popularity}</h5>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
