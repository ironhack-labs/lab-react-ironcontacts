import React, { useState } from "react"; // importamos React y useState si queremos utilizarlo.
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

const Button = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 20px 0px 20px 0px;
  .btn {
    background-color: lightgrey;
    border-radius: 3px;
    box-sizing: border-box;
    color: #000;
    display: block;
    max-width: 30%;
    padding: 15px 10px;
    text-decoration: none;
    &.deleteItem {
      max-width: 100%;
      font-size: 30px;
    }
    &:hover {
      color: #fff;
      background-color: grey;
      transition: all ease 100ms;
    }
  }
`;

export const Ironcontacts = () => {
  // esta es la lista inicial que dibujará la primera vez y que me sirve para poder hacer un useState
  const initLista = contacts.slice(0, 5);

  // Aquí uso useState para poner la lista por primera vez (primero solo 5 y luego los que sean porque la voy a ir updateando con setLista).
  const [lista, setLista] = useState(initLista);

  // Busco un número random
  const random = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  // Añado un contacto random a la lista con setLista (desestructuro y añado newIron)
  const addRandomIron = e => {
    e.preventDefault();
    const newIron = contacts[random(contacts.length, 0)];
    setLista([...lista, newIron]);
  };

  // Para ordenar por nombre
  const sortNameIron = e => {
    // lo primero siempre es un preventDefault para que react no refresque antes de tiempo
    e.preventDefault();
    let sortNameIron = lista
      .map(iron => {
        return iron.name;
      })
      .sort();
    // Creo una nueva lista en la que iré metiendo los Ironcontacts según su nombre
    const newIronSortName = [];
    sortNameIron.forEach(name => {
      [...lista].forEach(iron => {
        if (name === iron.name) {
          newIronSortName.push(iron);
        }
      });
    });
    // Meto la lista reordenada con SetLista
    setLista(newIronSortName);
  };

  // Para ordenar por popularidad hago lo mismo pero en lugar de comparar los nombres comparo la popularity
  const sortPopularityIron = e => {
    e.preventDefault();
    let sortPopularityIron = lista
      .map(iron => {
        return iron.popularity;
      })
      .sort((a, b) => b - a);
    const newIronSortPopularity = [];
    sortPopularityIron.forEach(popularity => {
      [...lista].forEach(iron => {
        if (popularity === iron.popularity) {
          newIronSortPopularity.push(iron);
        }
      });
    });
    setLista(newIronSortPopularity);
  };

  // Función para borrar de la Iteracion 4
  const deleteIronContact = (item, i) => {
    const deleteThis = item.id;
    const newIronList = lista.filter(item => {
      return item.id != deleteThis;
    });
    setLista(newIronList);
  };

  // ListItem lo importo de otro archivo por que son todos iguales
  return (
    <Contain className="contain">
      <Button>
        <a
          id="addBtn"
          className="btn"
          href="#"
          title="Add Random"
          onClick={addRandomIron}
        >
          Add Random Contact
        </a>
        <a id="sortNameButton" className="btn" href="#" onClick={sortNameIron}>
          Sort By Name
        </a>
        <a
          id="sortPopularityButton"
          className="btn"
          href="#"
          onClick={sortPopularityIron}
        >
          Sort By popularity
        </a>
      </Button>
      <Table>
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
              <td className="popularity">{item.popularity.toFixed(1)}</td>
              <Button style={{ margin: 0 }}>
                <a
                  id={`deleteItem-${i}`}
                  className="btn deleteItem"
                  href="#"
                  title="delete"
                  onClick={() => deleteIronContact(item, i)}
                >
                  🗑
                </a>
              </Button>
            </ListItem>
          ))}
        </tbody>
      </Table>
    </Contain>
  );
};
