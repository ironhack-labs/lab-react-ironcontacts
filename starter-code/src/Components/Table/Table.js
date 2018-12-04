import React, { Component } from "react";

import "./Table.css";
import Actor from "../actor/Actor";
import contacts from "../../contacts.json";

class Table extends Component {
  render() {
    
       return (
      <div className="Table">
        <h1>IronContacts</h1>
        <table>
          <tr>
            <th>{Object.keys(contacts[0])[1]}</th>
            <th>{Object.keys(contacts[0])[0]}</th>
            <th>{Object.keys(contacts[0])[2]}</th>
          </tr>

         
          {contacts.splice(0,5).map((contact, index)=>{
            return (<Actor {...contact} />)
          })}
         
        </table>
      </div>
    );
  }
}

export default Table;
