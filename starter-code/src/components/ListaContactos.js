import React from "react";
import { ItemContacto } from "./ItemContacto";
import PropTypes from 'prop-types';


export const ListaContactos = ({ contactData, deleteContact }) => {
  return (
    <section className="section">
      <div className="container">
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contactData.map((e, i) => (
              <ItemContacto
                key={e.name}
                index={i}
                item={e}
                onDelete={(idx) => deleteContact(idx)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

ListaContactos.propTypes ={
  deleteContact: PropTypes.func,
}
