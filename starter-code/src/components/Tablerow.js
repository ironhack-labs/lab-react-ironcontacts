import React from "react";

const Tablerow = (props) => {
    return (
        <tr key={props.id}>
            <td>
                <img src ={props.pictureUrl}/>
            </td>
            <td>
                <span>{props.name}</span>
            </td>
             <td>
                 <span>{props.popularity}</span>
             </td>

        </tr>
    );

};
export default Tablerow;