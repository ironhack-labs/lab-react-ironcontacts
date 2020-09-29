import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const ContactDetails = ({name,pictureUrl,popularity,remove}) => {

    return (

        <tr className="contact-style ">
            <td>
                <img src={pictureUrl} alt={name}/>
            </td>
            <td>
                {name}
            </td>
            <td>
                {(popularity).toFixed(2)}
            </td>
            <td>
            <button onClick={remove} className="btn btn-danger round-btn">X</button>
            </td>
        </tr>


    )

}

export default ContactDetails







