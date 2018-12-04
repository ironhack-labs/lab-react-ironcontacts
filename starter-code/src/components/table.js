import React, { Component } from 'react'
import Contact from './contact';
import Botton from './botton'
import './table.css'

export default class Table extends Component {
  render() {
    
    let contacts = Object.values(this.props.contact).map((contact, index)=>{ 
      
    return <Contact {...contact} operation={this.props.deleteItem} index={index}/>})
    
    return (
      <div className="container-table">
        <h1>IRON CONTACTS</h1>
        <Botton operation={this.props.addRandomContact} name={"Add Random Contact"}/>
        <Botton operation={this.props.sortByName} name={"Sort by Name"}/>
        <Botton operation={this.props.sortByPopularity} name={"Sort by popularity"}/>
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
