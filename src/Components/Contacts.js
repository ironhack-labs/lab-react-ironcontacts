import React, { Component } from 'react'
import Contact from './Contact'


const Contacts = (props) => {
    console.log("this is the props", props.contacts);
    return (

        <div> 
            <h1>Iron Contacts</h1>
            <table>
                <tbody>
                    <tr> 
                        <th> Picture</th>
                        <th> Name </th>
                        <th> Popularity </th>
                        <th> Action </th>
                    </tr>

                    {props.contacts.map((contact)=> {
                        console.log("this is the contact" , contact)
                        return <Contact key={contact.id} data={contact} />
                    })}
                </tbody>
            </table>
        </div>
    )
}

  export default Contacts;