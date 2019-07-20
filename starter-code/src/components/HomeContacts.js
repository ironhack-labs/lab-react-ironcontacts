import React from 'react'
import { Button } from 'antd'

function Contact({ obj, deleteCn }) {
  return (
    <tr>
      <td>
        <img src={obj.pictureUrl} alt={obj.name} width="100" />
      </td>
      <td>
        <h4>{obj.name}</h4>
      </td>
      <td>
        <h4>{obj.popularity.toFixed(2)}</h4>
      </td>
      <td>
        <Button
          onClick={() => {
            deleteCn()
          }}
        >
          Delete
        </Button>
      </td>
    </tr>
  )
}

function HomeContacts(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
      </thead>
      <tbody>
        {props.contacts.map((contact, i) => (
          <Contact
            deleteCn={() => {
              props.deleteFn(i)
            }}
            key={i}
            obj={contact}
          />
        ))}
      </tbody>
    </table>
  )
}

export default HomeContacts