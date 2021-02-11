/* eslint-disable jsx-a11y/alt-text */
import React from "react";


function Contact({name,popularity,pictureUrl,id}){
    //console.log("data Contact", deleteFunction);
    return(
            <tr key={id}>
                    <td>
                        <img style={{ width:80 }} src={pictureUrl}/>
                    </td>
                    <td>
                        <p>{name}</p>
                    </td>
                    <td>
                        <p>{popularity}</p>
                    </td>
                    <td>
                        <button>Delete</button>
                    </td>
            </tr>
    );
}

export default Contact