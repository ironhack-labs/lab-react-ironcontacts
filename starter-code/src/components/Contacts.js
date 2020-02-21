import React from 'react';

const Contact = props => {
    return (
        <div className = "table">
           
                   
                        <tr>
                            <td>       <img alt="" src={props.picture} />                </td>
                            <td>       {props.name}                  </td>
                            <td>       {props.popularity}                  </td>
                        </tr>
        </div>
    )
}

export default Contact;