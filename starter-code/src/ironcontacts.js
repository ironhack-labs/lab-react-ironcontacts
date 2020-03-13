import React from "react";
import { ListItem } from "./ListItem";
import contacts from "./contacts.json"; // importamos el JSON donde están los datos
import styled from "styled-components"; // Hago esto para poder meter aquí estilos en constantes.

// Le doy estilo a cada cosa que quiero dibujar en la tabla.

const Contain = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
`;

const Table = styled.table`
  display: flex;
  flex-direction: column;
  tr {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: 10px 0;
    width: 100%;
    td,
    th {
      font-size: 30px;
      display: flex;
      justify-content: center;
      width: 33%;
      img {
        display: block;
        padding: 10px;
        max-width: 100px;
        width: 100%;
      }
    }
  }
`;

export const Ironcontacts = () => {
  // Devuelvo una tabla pero con solo 5 contactos (para eso es el Slice)
  // ListItem lo importo de otro archivo por que son todos iguales, así los creo con el Map
  return (
    <Contain className="contain">
      <Table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {contacts.slice(0, 5).map((item, i) => (
            <ListItem key={i}>
              <td>
                <img src={item.pictureUrl} title={item.name} />
              </td>
              <td className="name">{item.name}</td>
              <td className="popularity">{item.popularity.toFixed(1)}</td>
            </ListItem>
          ))}
        </tbody>
      </Table>
    </Contain>
  );
};
