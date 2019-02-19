import React, { Component } from 'react';
import TableData from '../tableData/TableData';
import TableHead from '../tableHead/TableHead';
import contacts from '../../contacts.json';

class Table extends Component{


  render(){

    const getFive = contacts.slice(0, 5);

    const celebrities = getFive.map((celebrity, index) => {
      return (<TableData key={index} src={celebrity.pictureUrl} name={celebrity.name} popularity={celebrity.popularity}/>); 
    });

    return(
      <div>
        <h1>IronContacts</h1>
        <table className="table">
          <TableHead />
          {celebrities}
        </table>
      </div>
    )
  }
}

export default Table;