import React from 'react';

const ContactCard = (props) => {
    const { pictureUrl, name, popularity } = props.contact;

  return (

    <div className="table-contact">

        <table>
        <thead>
        <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
        </tr>
        </thead>

        <tbody>
        <tr>
            <td> <img src={pictureUrl}/> </td>
            <td>{name}</td>
            <td>{popularity}</td>
            <td> <button onClick={()=> props.delete(props.index)}>Delete</button> </td>
        </tr>
        </tbody>
        </table>

    </div>

  );
};

export default ContactCard;