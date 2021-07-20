import contacts from "../contacts.json";

function getRandomContact(array) {
    let randomContact = array[Math.floor((Math.random() * contacts.length))]
    return randomContact;
}

const AddRandomContact = (props) => {
  return (
    <div>
    <button onClick = {() => {props.addContact(getRandomContact(contacts))}}>Add Random Contact</button>
    </div>
  )
} 

export default AddRandomContact;