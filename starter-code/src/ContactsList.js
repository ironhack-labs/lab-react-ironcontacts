import React from 'react'
import Contact from './Contact'



const ContactsList = (props) => { 
    const list = props.contacts.map((c, i) => 
    (
        <div className="col-4" key={i}>
            <Contact contact={c} addRandomContact={props.addRandomContact}/>
        </div>
    ))
    return (
        <table className="table">
            <thead>
                <tr className="App-title">
                    <th scope="col">Picture</th>
                    <th scope="col">Name</th>
                    <th scope="col">Popularity</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            {list}
           
        </table>
    );
}

export default ContactsList