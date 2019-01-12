import React from "react";
import {ItemContacto} from './ItemContacto'

export const ListaContactos = ({contactData}) => {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
            {contactData.map((e,i)=>(
              <ItemContacto
                key={e.name}
                index={i}
                item={e}/>
            ))}
        </tbody>
      </table>
    </div>
  );
};
