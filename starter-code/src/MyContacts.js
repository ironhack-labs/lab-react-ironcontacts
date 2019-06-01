import React, {Component} from 'react'
import Contacts from '../src/contacts'


 const MyContacts =({chosenContacts, deleteActor})=>(
                <table className="table">
                    <thead>
                        <tr className='tr-header'>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    { chosenContacts.map ((contact, i) =>
                    <Contacts contact={contact} index={i} deleteActor={deleteActor}/>
                    )}
                    </tbody>
            
                    </table>
                    );
                
    

export default MyContacts
