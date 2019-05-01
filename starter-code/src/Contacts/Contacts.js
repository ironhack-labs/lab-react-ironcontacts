import React from "react";
import "./Contacts.css";
import App from "../App";

import CoolButton from "../CoolButton/CoolButton";



const Contacts = ({ contacts, clbk }) => (
  // console.log(clbk)
  < table className="contact" >
    {/* JSX pide tbody obligatoriamente */}
    < tbody >
      {
        contacts.map((contact, i) => (
          <tr className="row" key={i}>
            <td className="column-body">
              <span className="name">{contact.name}</span>
            </td>
            <td className="column-body">
              <span className="popularity">{contact.popularity.toFixed(2)}</span>
            </td>
            <td className="column-body">
              <img className="picture" src={contact.pictureUrl} alt="contact image" />
            </td>
            <td className="column-body">
              <CoolButton
                //ponemos onClick como metodo directo del boton para ver que se click, pasamos al componente del boton el handleClick
                onClick={() => clbk(i)}
                className="button is-danger"
                button="Delete"
              />
            </td>
          </tr>
        ))
      }
    </tbody >

  </table >
);

export default Contacts;
