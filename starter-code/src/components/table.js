import React, { Component } from 'react'
import Contact from './contact';
import Botton from './botton'
import './table.css'

export default class Table extends Component {
  render() {
    
    let contacts = Object.values(this.props).map((contact)=>{
    return <Contact {...contact}/>})

    return (
      <div className="container-table">
        <h1>IRON CONTACTS</h1>
        <Botton addRandomContact={this.props.addRandomContact}/>
        <table>
          <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          </thead>
          <tbody>
          {contacts}
          </tbody>
         
        </table>
        
      </div>
    )
  }
}
