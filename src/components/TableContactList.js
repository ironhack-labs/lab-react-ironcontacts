import React from 'react';
import './contactList'

function Table ({pictureUrl, name, popularity, id}) {
    return(
        <div className="table">
                <table>
                    <thead>
                        <tr>Iron Contacts</tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Picture</td>
                            <td>Name</td>
                            <td>Popularity</td>
                            <td>Action</td>
                        </tr>

                        const contactsArr = contacts;

{/* function ContactList () {
const displayContacts = () =>{  
return contactsArr.map((contacts) => {
return(
<Table {...contacts} key={contacts.id} />
)
})
}
return(
<div className="table-container">
{displayContacts()}
</div>
)
} */}


                        <tr>
                            <td>{pictureUrl}</td>
                            <td>{name}</td>
                            <td>{popularity}</td>
                            <td>{id}</td>
                        </tr>
                    </tbody>
                </table>
        </div>
    )
}

export default Table;