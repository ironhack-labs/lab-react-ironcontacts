import React from "react"

const ContactRowTable = ({ name, pictureUrl, popularity, removeContact }) => {

    return (
        <>
            <tr>
                <td><img src={pictureUrl} alt={name} /></td>
                <td>{name}</td>
                <td>{popularity.toFixed(2)}</td>
                <td><button onClick={removeContact}>Delete</button></td>
            </tr>
        </>
    )

}


export default ContactRowTable