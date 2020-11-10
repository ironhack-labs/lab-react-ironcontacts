import React from 'react'


const TableRow = ({name, popularity, pictureUrl,clickToDelete}) => {

    // deleteContact(key){
    //     const  stateContacts  = this.state.contacts.filter(contact=>contact.id!==key)
    //     this.state({contact:stateContacts})
    //     console.log(stateContacts)
    // }

    return (
        <tr>
            <td><img src={pictureUrl} height="200"/></td>
            <td>{name}</td>
            <td>{popularity}</td>
            <td><button onClick={clickToDelete}>Delte</button></td>
        </tr>
    )
}

export default TableRow