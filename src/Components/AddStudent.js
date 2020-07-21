import React, { Component } from "react";
import contacts from "../contactss.json";

class contacts extends Component {
    state = {
        contacts: contacts,
        newContact:"",
    }
}
export default contacts;