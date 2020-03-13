import React, { Component } from "react";
import styled from "styled-components";
import contactsArray from "../contacts.json";
import RandomButton from "./RandomButton";
import SortNameButton from "./SortNameButton";
import SortPopularityButton from "./SortPopularityButton";

const Thead = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1.6em;
  height: 70px;
`;
const Theadp = styled.p`
  width: 800px;
  margin-left: 30px;
`;
const TheadpN = styled.p`
  width: 800px;
  margin-left: 50px;
`;
const TheadpA = styled.p`
  width: 800px;
  margin-right: 15px;
`;

const TableRec = styled.div`
  border: grey solid 1px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
`;

const ButtonsTop = styled.div`
  display: flex;
  justify-content: space-around;
  height: 50px;
  margin-bottom: 30px;
`;

const Img = styled.img`
  width: 70px;
  height: 90px;
  margin-left: 15px;
`;

const NameContact = styled.p`
  font-size: 1.5em;
  width: 150px;
`;

const Table = styled.table`
  display: grid;
`;

const TableItems = styled.tr`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: auto;
`;

const ButtonDelete = styled.button`
  background-size: cover;
  width: 80px;
  height: 30px;
  border-radius: 5px;
  transition: 0.3s all;
  outline: none;
  &:hover {
    background-color: grey;
    transform: scale(1.1);
    color: white;
    outline: none;
  }
`;

class Contacts extends Component {
  constructor() {
    super();
    this.state = { contacts: contactsArray.splice(0, 5) };
  }

  randomClick() {
    const min = 0;
    const max = contactsArray.length;
    const rand = Math.floor(Math.random() * (max - min));
    const contactRandom = contactsArray[rand];
    this.setState({
      ...this.state,
      contacts: [...this.state.contacts.splice(0), contactRandom]
    });
  }
  sortNameClick() {
    const orderContacts = this.state.contacts.sort(function(a, b) {
      return a.name > b.name ? 1 : -1;
    });
    this.setState({
      ...this.state,
      contacts: orderContacts
    });
  }
  sortPopularityClick() {
    const orderPopularity = this.state.contacts.sort(function(a, b) {
      return b.popularity - a.popularity;
    });
    this.setState({
      ...this.state,
      contacts: orderPopularity
    });
  }
  deleteContactClick(id) {
    this.setState({
      ...this.state,
      contacts: [...this.state.contacts.filter(item => item.id !== id)]
    });
  }

  render() {
    return (
      <div>
        <ButtonsTop>
          <RandomButton
            contacts={this.state.contacts}
            randomClick={this.randomClick.bind(this)}
          />
          <SortNameButton
            contacts={this.state.contacts}
            sortNameClick={this.sortNameClick.bind(this)}
          />
          <SortPopularityButton
            contacts={this.state.contacts}
            sortPopularityClick={this.sortPopularityClick.bind(this)}
          />
        </ButtonsTop>
        <TableRec>
          <Thead>
            <Theadp>Picture</Theadp>
            <TheadpN>Name</TheadpN>
            <Theadp>Popularity</Theadp>
            <TheadpA>Action</TheadpA>
          </Thead>
          <hr />
          <Table>
            <tbody>
              {this.state.contacts.map((cont, i, index) => (
                <TableItems key={i}>
                  <td>
                    <Img src={cont.pictureUrl} alt={cont.pictureUrl} />
                  </td>
                  <td>
                    <NameContact>{cont.name}</NameContact>
                  </td>
                  <td>
                    <p>{cont.popularity.toFixed(2)}</p>
                  </td>
                  <td>
                    <ButtonDelete
                      onClick={() => this.deleteContactClick(cont.id)}
                    >
                      Delete
                    </ButtonDelete>
                  </td>
                </TableItems>
              ))}
            </tbody>
          </Table>
        </TableRec>
      </div>
    );
  }
}

export default Contacts;
