import React from 'react'

function Contact({ pictureUrl, name, popularity, wonOscar, wonEmmy, onClickDelete }) {
  const handleRound = () => {
    return Math.round(popularity*100)/100
  }
  const handleShowOscar = () => {
    return wonOscar ? "🏆" : ""
  }
  const handleShowEmmy = () => {
    return wonEmmy ? "🏆" : ""
  }
  return (
    <tr>
      <td>
        <img src={pictureUrl} alt="" className='img-fluid' />
      </td>
      <td>{name}</td>
      <td>{handleRound()}</td>
      <td>{handleShowOscar()}</td>
      <td>{handleShowEmmy()}</td>
      <td><button className='btn btn-danger'><i className='fa fa-trash' onClick={onClickDelete}></i></button></td>
    </tr>
  )
}

export default Contact