import React from 'react'

const TableComp = (props) => {

  const list = props.list.map((elem, i)=> {
    return (
     <tr key={i}>
        <td><img src={elem.pictureUrl} width="150" height="200" alt="contact"/></td>
        <td>{elem.name}</td>
        <td>{elem.popularity}</td>
        <td><button onClick={props.delete}>Delete</button></td>
      </tr>
    )
  })

  return(
    <table>
      <tbody>
        <tr>
          <td>Picture</td>
          <td>Name</td>
          <td>Popularity</td>
        </tr>
        {list}
      </tbody>
    </table>
  )
  
}

export default TableComp