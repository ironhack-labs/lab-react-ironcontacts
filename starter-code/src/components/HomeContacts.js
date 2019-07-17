import React from 'react'
import { Button } from 'antd'

function Contact({ obj, index, deleteCn }) {
  return (
    <tr>
      <td>
        <img src={obj.pictureUrl} alt={obj.name} width="100" />
      </td>
      <td>
        <h4>{obj.name}</h4>
      </td>
      <td>
        <h4>{obj.popularity}</h4>
      </td>
      <td>
        <Button
          onClick={() => {
            deleteCn({ index })
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
            index={i}
            deleteCn={() => {
              props.deleteFn()
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
