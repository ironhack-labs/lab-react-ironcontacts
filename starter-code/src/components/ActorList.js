import React, { Component } from "react";
import contacts from "./contacts.json";

class ActorList extends Component {
  constructor() {
    super();
    this.state = { contacts: contacts.splice(0, 5) };
  }
}

export default ActorList;
