//import { Component } from "react"
import './CardContact.css';
//const CardContacts = (props) => {   ///*esta lina es la misma que la que esta justo debajo */
const CardContacts = ({ pictureUrl, name, popularity, id, blahblah }) => {
    return (
        <>
            <div className="card">
                {/* <img src={props.pictureUrl} alt="imagen" /> <p> Name: {props.name} </p> <p> Popularity: {props.popularity} </p>   ///*esta lina es la misma que la que esta justo debajo */}
                < img src={pictureUrl} alt="imagen" /> <p> Name: {name} </p> <p> Popularity: {popularity} </p>
            </div>
            {/* <button onClick={() => props.blahblah(props.id)}  >   ///*esta lina es la misma que la que esta justo debajo */}
            {/* < button onClick={() => blahblah(id)}  >
                Delete
            </button> */}

        </>
    )
}


export default CardContacts