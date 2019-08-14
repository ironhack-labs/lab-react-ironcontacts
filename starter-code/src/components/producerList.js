import React, { Component } from 'react'
import ContactsCard from '../components/Contacts'
import contacts from '../contacts.json'


export const contactList = contacts.map((elm, idx) => 
{
    return <ContactsCard key={idx} producerName={elm.name} producerFoto={elm.pictureUrl} producerPopularity={elm.popularity} />
}) 

export default contactList