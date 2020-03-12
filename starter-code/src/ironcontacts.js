import React, { useState } from "react";
import { ListItem } from "./ListItem";
import contacts from "./contacts.json";
import styled from "styled-components";

const Contain = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 400px;
  width: 100%;
`;

const H2Title = styled.h2`
  color: #000;
  font-size: 50px;
  margin: 50px auto 20px;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
`;

const Buttons = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  .btn {
    background-color: rgba(0, 100, 0, 0.4);
    border-radius: 6px;
    box-sizing: border-box;
    color: #000;
    display: block;
    max-width: 32%;
    padding: 7px 10px;
    text-decoration: none;
    &:hover {
      color: #fff;
      background-color: rgba(0, 100, 0, 1);
      transition: all ease 1000ms;
    }
  }
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
      font-size: 26px;
      display: flex;
      justify-content: center;
      width: 33%;
      img {
        display: block;
        border-radius: 6px;
        max-width: 100px;
        width: 100%;
      }
    }
  }
`;

export const Ironcontacts = () => {
  const initLista = contacts.slice(0, 5);
  const [lista, setLista] = useState(initLista);

  const random = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const addRandomIron = e => {
    e.preventDefault();
    const newIron = contacts[random(contacts.length, 0)];
    setLista([...lista, newIron]);
  };

  const sortName = e => {
    e.preventDefault();
    let sortNameIron = lista
      .map(iron => {
        return iron.name;
      })
      .sort();
    const newIronSortName = [];
    sortNameIron.forEach(name => {
      [...lista].forEach(iron => {
        if (name === iron.name) {
          newIronSortName.push(iron);
        }
      });
    });
    setLista(newIronSortName);
  };

  const sortPopularity = e => {
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

  return (
    <Contain className="contain">
      <H2Title>Ironcontacts</H2Title>
      <Buttons>
        <a
          id="addBtn"
          className="btn"
          href="#"
          title="Add Random"
          onClick={addRandomIron}
        >
          Add Random Contact
        </a>
        <a
          id="sortName"
          className="btn"
          href="#"
          title="Sort By Name"
          onClick={sortName}
        >
          Sort By Name
        </a>
        <a
          id="sortPopularity"
          className="btn"
          href="#"
          title="Sort By popularity"
          onClick={sortPopularity}
        >
          Sort By popularity
        </a>
      </Buttons>
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
              <td className="popularity">{item.popularity.toFixed(2)}</td>
            </ListItem>
          ))}
        </tbody>
      </Table>
    </Contain>
  );
};
