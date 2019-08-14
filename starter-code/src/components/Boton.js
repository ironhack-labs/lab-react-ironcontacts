// import React from 'react'



import React from 'react'

const Boton = ({ addContact }) => {
  console.log("Soy el botón")
  return(  <div className="col-12 listas">
       
        <button className="btn btn-dark" onClick={addContact}>
        Añadir contacto random
        </button>
    </div>)}

export default Boton