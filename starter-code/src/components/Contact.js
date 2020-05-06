import React from 'react'

const Contact = (props) => (
 
  props.data.map((e, i) => {
    return (
      <div>
      <tr key={i}>
        <td>
          <img src={e.pictureUrl} alt={e.name} />
        </td>
        <td>
          <p>{e.name}</p>
        </td>
        <td>
          <p>{e.popularity}</p>
        </td>
      </tr>
      <button onClick={() => {props.deleteData(i)}}>Delete</button>
      </div>
    );
  })
)
export default Contact