import React, {Component} from 'react'
import Contacts from '../src/contacts'


 const MyContacts =({chosenContacts})=>(
                <table className="table">
                    <thead>
                        <tr className='tr-header'>
                        <th>Name</th>
                        <th>Picture</th>
                        <th>Popularity</th>
                        </tr>
                    </thead>
                    <tbody>
                    { chosenContacts.map ((contact, i) =>
                    <Contacts contact={contact} index={i}/>
                    )}
                    </tbody>
            
                    </table>
                    );
                
    

export default MyContacts
