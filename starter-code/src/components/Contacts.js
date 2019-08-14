
import React from 'react'
import DinamicList from './dinamicList'

const ContactsCard = ({ producerName, producerFoto,producerPopularity, deleteProducer }) =>
    <li className="col-md-4 oneMovie">
        <h2>{producerName}</h2>
        <img src= {producerFoto}></img>
        <h2>{producerPopularity} </h2>
        <button className="btn btn-dark btn-sm" onClick={deleteProducer}>Eliminar peludo</button>
    </li>

export default ContactsCard