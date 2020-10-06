import React from "react";

function Contact(props){
    return (
        <div>
            <table>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>  
                </tr>
                <tr>
                    <td><img src={props.picture} alt="Picture"/></td>
                    <td>{props.name}</td>
                    <td>{props.popularity}</td>
                </tr>
            </table>
        </div>
    )
}

export default Contact