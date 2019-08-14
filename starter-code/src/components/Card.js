// import React from 'react'

// const Card = ({ pictureUrl, name, popularity, delete }) =>
//     <li className="col-md-12 mt-4 listas">
//         <img src={pictureUrl} height="100px" alt="iamgen"/>
//         <h2>Name: {name}</h2>
//         <p>Popularity: {popularity}</p>
//         <button className="btn btn-danger" onClick={delete} >Delete</button>
//         <hr></hr>
//     </li>

// export default Card


import React from 'react'

const ImprovedCard = ({ pictureUrl, name, popularity, deleteContact }) =>
    <li className="col-md-12 mt-4 listas">
           <img src={pictureUrl} height="100px" alt="iamgen"/>
           <h2>Name: {name}</h2>
           <p>Popularity: {popularity}</p>
        <button className="btn btn-danger btn-sm" onClick={deleteContact}>Eliminar contacto</button>
        <hr></hr>
    </li>

export default ImprovedCard