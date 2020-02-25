import React from 'react'
import contacts from '../contacts.json';
import FamousTable from './FamousTable/FamousTable';


// Datos
const famous = contacts.slice(0,5)

// Exportacion nominal

export const famousList = famous.map((elm, idx) => <FamousTable key={idx} famousname={elm.name} imgurl={elm.pictureUrl} popularity={elm.popularity} />)