import React from 'react'
import contacts from '../../contacts.json'

const ICListDisplay = (props)=>{
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
        {console.log(props.info)}
        {props.info.map((c,i)=> (
         <tr key={i}>
           <td><img src={c.pictureUrl} alt=""/></td>
           <td>{c.name}</td>
           <td>{c.popularity}</td>
         
         </tr> 
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default ICListDisplay