import React from 'react'
import EachUser from './EachUser'

import './IronContacts.css'

const IronContacts = ({contacts, addNewContact, sortByName, sortByPopularity, deleteUser}) => {
    // console.log(contacts)
    return (
        <div className='contacts'>
          <div className='navbar'>
          <div className='iterations'>
                <button>Iteration 1 | Display 5 Contacts</button>
                <button>Iteration 2 | Add New Random Contacts</button>
                <button>Iteration 3 | Sort Contacts By Name And Popularity</button>
                <button>Iteration 4 | Remove Contacts</button>
                <button>Iteration 5 | Bonus | Styling</button>
           </div>
            <button onClick={addNewContact} className='click-btn'>Add Random Contact</button>
            <button onClick={sortByName} className='click-btn'>Sort By Name</button>
            <button onClick={sortByPopularity} className='click-btn'>Sort By Popularity</button>
          </div>
            <div className='header'>
                <h4 style={{width: 150}}>Picture</h4>
                <h4>Name</h4>
                <h4>Popularity</h4>
                <h4>Action</h4>
            </div>
            <div  id='contacts'>
                {contacts.map(eachUser => <EachUser key={eachUser.id} {...eachUser} deleteUser={deleteUser}/>)}
            </div>
        </div>
    )
}

export default IronContacts
