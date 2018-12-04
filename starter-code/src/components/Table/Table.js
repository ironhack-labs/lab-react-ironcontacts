import React, { Component } from 'react'
import './Table.css';

export default class Table extends Component {
    

    

  render() {
    return (
      <table className="contacts-table">
      <thead>
        <tr>

            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {this.props.contactos.map((contacto,index)=>{

            return (
                <tr key={index}>
                <td><img src={contacto.pictureUrl}></img></td>
                <td>{contacto.name}</td>
                <td>{contacto.popularity}</td>
                <td>{contacto.deleteButton}</td>
                </tr>
            
            )

        })}
        </tbody>
      </table>
    )
  }
}
