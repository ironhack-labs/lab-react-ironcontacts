import React from 'react';
const Contact = (props) => {
    return (
        <tr className ="row" >
            <td className = "img"><img src = {props.img}></img></td>
            <td className ="name">{props.name}</td>
            <td className = "popularity">{props.popularity}</td>
        </tr>
    );
}

export default Contact;
