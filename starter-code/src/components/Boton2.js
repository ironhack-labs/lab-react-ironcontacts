import React from 'react'

const Boton2 = ({ orderContacts }) =>
    <div className="col-12 listas">
       
        <button className="btn btn-dark" onClick={orderContacts}>
        Ordenar por popularidad
        </button>
    </div>

export default Boton2