import React from 'react'

const Contacts = (props) => {

  const data = props.data.map((e, i) => {

   return <tr key={i} className="contacts">
            <td> <img src={e.pictureUrl} alt={i} /> </td>
            <td>{e.name}</td>
            <td>{e.popularity}</td>
            <td> <button onClick={() => props.deleteContact(i)}>Delete</button> </td>
          </tr>
  })

  return (
    <div className="contacts-container">
      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {data}
        </tbody>
      </table>
    </div>
  )
}

export default Contacts


