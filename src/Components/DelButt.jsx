let DelButt = (props) => {

    const {contacts,id,method} = props;

    let click = () =>{
        let newContacts=[];
        console.log("Deleting user with id ", id)
        //indentify wich one to take out
        contacts.map((contact) =>{
            contact.id !== id?newContacts.push(contact):console.log("asd")
        })
        
        method(newContacts)
    }

    return(
        <button onClick={click}>Delete</button>
    )
}
export default DelButt