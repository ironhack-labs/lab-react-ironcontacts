import React from 'react'

const Contacts = (props) => {
console.log(props)
    return (
        
        <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
        {props.contacts.map(elem=>{
            return  <tr>
            <td>1</td>
            <td>{elem.pictureURL}</td>
            <td>{elem.name}</td>
            <td>{elem.popularity}</td>
          </tr>
        })}
         
        </tbody>
      </table>
    )
}

export default Contacts;