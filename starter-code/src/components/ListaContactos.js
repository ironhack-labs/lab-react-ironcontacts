import React from "react";
import {ItemContacto} from './ItemContacto'

export const ListaContactos = ({contactData, deleteContact}) => {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {contactData.map((e,i)=>(
              <ItemContacto
                key={e.name}
                index={i}
                item={e}
                onDelete={(index)=> deleteContact(index)}/>
            ))}
        </tbody>
      </table>
    </div>
  );
};
