import React, { Component } from 'react';
import './App.css';
import { Table } from './table';
import Contacts from "./contacts"

const First = Contacts.splice(0, 5)

export class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>IronContacts</h1>
        </header>
        <div>
          <Table datab={First} />
        </div>
      </div>
    );
  }
}