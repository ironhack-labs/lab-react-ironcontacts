import contacts from '../contacts.json'

const AddContact = (props) => {
    
    let listContact = contacts.slice(5);
    const arrIndex = Math.floor(Math.random() * listContact.length)

    return(
        <button onClick = {() => {props.addContact(listContact[arrIndex])}}>Add Random Contact</button>

    )
}

export default AddContact