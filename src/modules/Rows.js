import Button from "./Button"

const Rows = ({ contact, deleteRegister }) => {

    return (

        <>

            <td style={{ width: '10%' }}>  <img src={contact.pictureUrl} alt="profile img" style={{ width: '50%' }} /> </td>
            <td style={{ width: '10%' }}> {contact.name}</td>
            <td style={{ width: '10%' }}> {Math.round(contact.popularity)}</td>
            <td style={{ width: '10%' }}> <Button name="Delete" fn={deleteRegister} /> </td>

        </>
    )
}

export default Rows