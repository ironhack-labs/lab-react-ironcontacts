import React from 'react';
import Row from './Row.js'

const table = (props) => {
    const rows = () => {
      return props.contacts.map((e, i) => {
        return <Row key={i} {...e} deleteBtn={ () => { props.deleteContact(i)} }/>
      })
    };

    return (
      <div>
      <button onClick={props.addContact}>Add Contact</button>
      <button onClick={props.orderName}>Order by Name</button>
      <button onClick={props.orderPop}>Order by Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>
          <tbody>
            {rows()}
          </tbody>
      </table>
      </div>
    );
}

export default table;
