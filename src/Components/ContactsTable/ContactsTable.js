import React from "react";
import "./ContactsTable.css";
import TableRow from "../TableRow/TableRow";

const ContactsTable = props => {
    return(
        <table className="contacts-table">
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                </tr>
            </thead>

            <tbody>
                {props.contactList.map(contact =>
                    <TableRow key={contact.id} contact={contact} />
                )}
            </tbody>
        </table>
    );
};

export default ContactsTable;