import './AddContactButton.css'

const AddContactButton = ({ addContact, buttonAction }) => {

    return (
        <button className="xlButton" onClick={addContact}>{buttonAction}</button>
    )
}

export default AddContactButton