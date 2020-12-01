import './Row.css'
import Button from '../button/Button'

const ContactRow = ({ name, picture, popularity, deleteContact}) => {
  return (
      <tr className='row'>
        <td><img src={picture} alt={name} /></td>
        <td>{name}</td>
        <td>{popularity}</td>
        <td><Button event={deleteContact} text='Delete' /></td>
      </tr>
  )
}

export default ContactRow