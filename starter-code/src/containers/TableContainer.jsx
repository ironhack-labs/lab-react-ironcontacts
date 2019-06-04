import React, { Component } from "react";
import "../App.css";
import TableData from "../components/TableData";
import TableHead from "../components/TableHead";


class TableContainer extends Component {
  render () {
    const { contacts, click } = this.props;
    return (
      <table>
        <thead>
          <TableHead/>
        </thead>
        <tbody>
          {
            contacts.map((element, index) => {
              return <TableData 
                key={index} 
                index={index} 
                src={element.pictureUrl} 
                name={element.name} 
                popularity={element.popularity} 
                contact={element} 
                onclick={click}
              />
            })
          }
        </tbody>
      </table>
    )
  }
}

export default TableContainer;