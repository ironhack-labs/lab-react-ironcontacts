import React from "react";

const Tablerow = (props) => {
    return (
        <tr key={props.id}>
            <td>
                <img width="48px" src ={props.pictureUrl} alt="avatar"/>
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