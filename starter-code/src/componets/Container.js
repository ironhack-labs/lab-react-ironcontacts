import React from 'react'

const Contanier = ({ name, pictureUrl, popularity, deleteC }) =>
    <div className="row">
    <div className="col-md-3 lista">
        <img src={pictureUrl}/>
    </div>
    
    <div className="col-md-3 lista">
            <li><strong><h4>{name}</h4></strong></li>
    </div>

    <div className="col-md-3 lista">
            <li><strong><h4>{popularity}</h4></strong></li>
    </div>

    <div className="col-md-3 lista">
            <button className="btn btn-dark btn-sm" onClick={deleteC}>Eliminar</button>
    </div>
    </div>
export default Contanier;