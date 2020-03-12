import React, { useState } from "react";
import { ListItem } from "./ListItem";
import contacts from "./contacts.json";


export const Ironcontacts = () => {
  const initLista = contacts.slice(0, 5);
  const [lista, setLista] = useState(initLista);

  return (
      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {lista.map((item, i) => (
            <ListItem key={i}>
              <td>
                <img src={item.pictureUrl} title={item.name} />
              </td>
              <td className="name">{item.name}</td>
              <td className="popularity">{item.popularity.toFixed(2)}</td>
            </ListItem>
          ))}
        </tbody>
      </table>
  );
};