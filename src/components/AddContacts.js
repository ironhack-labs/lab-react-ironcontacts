import listContacts from "../contacts.json"

const AddContact = (props) => {

    const newContacts = listContacts
    const random = Math.floor(Math.random() * newContacts.length)
    
    return (
        <button onClick = {()=>{props.AddContact(newContacts[random])}}>Add Random Contact</button>
    )
}

export default AddContact