import React from "react";
import "./ContactsTable.css";
import TableRow from "../TableRow/TableRow";

const ContactsTable = ({ contactList, deleteContact }) => {
    return(
        <table className="contacts-table">
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {contactList.map(contact =>
                    <TableRow 
                        contact={contact}                        
                        deleteContact={deleteContact}
                    />
                )}
            </tbody>
        </table>
    );
};

export default ContactsTable;