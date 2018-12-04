import React, { Component } from 'react'
import Contact from './contact';

export default class Table extends Component {
  render() {
    
    let contacts = Object.values(this.props).map((contact)=>{
    return <Contact {...contact}/>
    
    })
    return (
      <div>
        <table>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {contacts}
        </table>
        
      </div>
    )
  }
}
