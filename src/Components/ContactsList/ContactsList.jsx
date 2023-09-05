/* eslint-disable no-unused-vars */
import './ContactsList.css'
import { useState } from 'react'

import Contact from '../Contact/Contact'
import HandleButtons from '../HandleButtons/HandleButtons'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';




import contactsJson from '../../contacts.json'

function ContactsList() {

const INITIAL_CONTACTS = contactsJson.slice(0, 5)

const [contacts, setContacts] = useState(INITIAL_CONTACTS)

//eliminnar contacto con filter
    const onDeleteContact = (id) => {
        const newContacts = contacts.filter(contact => contact.id !== id)
        setContacts(newContacts)
    }

    const addRandomContact = () => {
        if(contactsJson.length === 0){
            return alert('no hay más contactos por agregar')
        }
        const randomIndex = Math.floor(Math.random() * contactsJson.length)
        const newcontact = contactsJson.splice(randomIndex, 1)[0]
        const newContacts = [...contacts, newcontact]
        setContacts(newContacts)
    }

    const sortByPopularity = () => {
        const newContacts = [...contacts].sort((a, b) => b.popularity - a.popularity)
        setContacts(newContacts)
    }

    const sortByName = () => {
        const newContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name))
        setContacts(newContacts)
    }




    return (
        <>
        <HandleButtons addRandomContact={ () => addRandomContact()} sortByPopularity={sortByPopularity} sortByName={sortByName}  />
                <TableContainer >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className='cell'>Picture</TableCell>
                        <TableCell className='cell' align="right">Name</TableCell>
                        <TableCell className='cell' align="right">Popularity</TableCell>
                        <TableCell className='cell' align="right">Won Oscar</TableCell>
                        <TableCell className='cell' align="right">Won Emmy</TableCell>
                        <TableCell className='cell' align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        contacts.map(contact => (
                            <Contact key={contact.id} {...contact} onDelete={() => onDeleteContact(contact.id)} />
                        ))
                    }
                </TableBody>

            </Table>
        </TableContainer>
        </>

    );
}
export default ContactsList;









