import React, { Component } from "react";

import "./Table.css";
import Actor from "../actor/Actor";
import contacts from "../../contacts.json";

class Table extends Component {

  constructor () {
    super()
    this.state = {
      contact: contacts.splice(0,5).map((contact)=> contact)
    }
  }

  addRandom = () => {
    const _contact = [...this.state.contact]
    _contact.push(contacts[Math.floor(Math.random() * contacts.length)])
    this.setState({...this.state, contact:_contact})
    console.log(this.state)
  }



  sortName = () => {
    const _contact = [...this.state.contact]
    const arrSortName = _contact.sort((a,b) => (a.name).localeCompare(b.name));
    this.setState({...this.state, contact:arrSortName})
    console.log(arrSortName)
  }


  sortPopu = () => {
    const _contact = [...this.state.contact]
    const arrSortPopu = _contact.sort((a,b) => (b.popularity - a.popularity));
    this.setState({...this.state, contact:arrSortPopu})
    console.log(arrSortPopu)
  }

  render() {
    
       return (
      <div className="Table">
        <h1>IronContacts</h1>

        <button onClick={this.addRandom}>Add Random</button>
        <button onClick={this.sortName}>sort Name</button>
        <button onClick={this.sortPopu}>Sort Popularity</button>

        <table>
          <tr>
            <th>{Object.keys(contacts[0])[1]}</th>
            <th>{Object.keys(contacts[0])[0]}</th>
            <th>{Object.keys(contacts[0])[2]}</th>
          </tr>

         
          {/* {contacts.splice(0,5).map((contact, index)=>{
            return (<Actor {...contact} />)
          })} */}
         {this.state.contact.map(contact => <Actor {...contact}/>) } 
        </table>
      </div>
    );
  }
}

export default Table;
