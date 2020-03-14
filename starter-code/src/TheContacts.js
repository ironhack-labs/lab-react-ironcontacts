import React from "react";
import { EachContact } from "./EachContact";
import contacts from "./contacts.json";
import styled from "styled-components";

console.log(contacts);
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
        max-width: 100px;
        width: 100%;
      }
    }
  }
`;
export const TheContacts = () => {
  return (
    <Contain>
      <H2Title>The Contacts</H2Title>
      <Table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {contacts.slice(0, 5).map((item, i) => (
            <EachContact key={i}>
              <td>
                <img src={item.pictureUrl} title={item.name} />
              </td>
              <td>{item.name}</td>
              <td>{item.popularity.toFixed(2)}</td>
            </EachContact>
          ))}
        </tbody>
      </Table>
    </Contain>
  );
};
