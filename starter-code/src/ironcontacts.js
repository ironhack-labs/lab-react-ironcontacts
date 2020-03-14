import React, { useState } from "react";
import { ListItem } from "./ListItem";
import contacts from "./contacts.json";
import styled  from "styled-components";

const Wrapper = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 400px;
  width:100%;
`;

const Title = styled.h2`
  color: #000;
  font-size: 50px;
  margin: 100px auto 20px;
  text-transform: uppercase;
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
        border-radius: 6px;
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
  margin-bottom: 20px;
  .btn {
    background-color: royalblue;
    border-radius: 6px;
    box-sizing: border-box;
    color: #000;
    display: block;
    max-width: 32%;
    padding: 7px 10px;
    text-decoration: none;
    &:hover {
      color: #fff;
      background-color: blue;
      transition: all ease 1000ms;
    }
  }
`;


export const Ironcontacts = () => {
  const initLista = contacts.slice(0, 5);
  const [lista, setLista] = useState(initLista);

  const selectRandom = array =>
  array[Math.floor(Math.random() * array.length)];

  const addRandomIron = e => {
    e.preventDefault();
    let newContact = selectRandom(contacts);
    setLista([...lista, newContact]);
    
  };

  const sortbyName = () => {
    const orderbyName = lista.sort((a, b) => a.name.localeCompare(b.name));
    setLista([...orderbyName]);
  }

  const sortbyPopularity = () => {
    const orderbyPolularity = lista.sort((a,b)=> b.popularity - a.popularity);
    setLista([...orderbyPolularity]);
  }

  return (
      <Wrapper>
        <Title>Ironcontacts</Title>
        <Table>
          <Button><a
          id="addBtn"
          className="btn"
          href="#"
          title="Add Random"
          onClick={addRandomIron}
        >
          Add Random Contact
        </a>
        <a
          id="sortbyName"
          className="btn"
          href="#"
          title="sort by Name"
          onClick={sortbyName}
        >
          sort by Name
        </a>
        <a
          id="sortbyPopularity"
          className="btn"
          href="#"
          title="sort by Popularity"
          onClick={sortbyPopularity}
        >
          sort by Popularity
        </a></Button>
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
      </Wrapper>
  );
};