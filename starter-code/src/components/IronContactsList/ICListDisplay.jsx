import React from 'react'
import contacts from '../../contacts.json'

const firstFive = contacts.splice(0,5)

const ICListDisplay = ()=>{
  return(
    <div>
      <h1>IronContacts</h1>
      <button onClick={this.randomContact}>Add Random Contact</button>
      <button onClick={this.sortByName}>Sort By name</button>
      <button onClick={this.sortByPopularity}>Sort By Popularity</button>
      <table>
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </thead>
        <tbody>
         
         {firstFive.map((c,i)=> <tr key={c}></tr>)}
         
        </tbody>
      </table>
    </div>
  )
}

export default ICListDisplay