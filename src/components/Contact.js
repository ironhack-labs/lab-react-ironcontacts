import React from 'react'

function Contact({ pictureUrl, name, popularity }) {
  const round = () => {
    return Math.round(popularity*100)/100
  }
  return (
    <tr>
      <td>
        <img src={pictureUrl} alt="" className='img-fluid' />
      </td>
      <td>{name}</td>
      <td>{round()}</td>
    </tr>
  )
}

export default Contact