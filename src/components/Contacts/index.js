import React from 'react'
import Contact from '../Contact'
import './style.css'

export default function index({ contacts }) {
    return (
        <table className="contacts-table">
            <thead>
                <tr className="contacts-table-header" >
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                </tr>
            </thead>
            <tbody>
                {contacts && contacts.map((contact, index) =>
                    <Contact key={contact.id} contact={contact} />
                )}
            </tbody>
        </table>
    )
}
