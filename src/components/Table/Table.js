import React, { Component } from 'react'
import TableRow from '../TableRow/TableRow'
import contacts from '../../contacts.json'
import './Table.css'


const originalContacts = [...contacts] 

class Table extends Component {
    
    state = {
        contacts: originalContacts.splice(0, 5)
      }

    render() {
       
        const { contacts } = this.state

        return(
            <div>
                <table className='Table-Container'>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Won Oscar</th>
                            <th>Won Emmy</th>
                        </tr>
                    </thead>
                    <tbody className='Table-Body' >
                    {contacts.map((contact) => (
                    <TableRow
                      key={contact.id} {...contact}
                       
                    />
                  ))}
                    </tbody>
                </table>
            </div>
        )
      }
    
       
}


export default Table

