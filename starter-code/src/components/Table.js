import React from "react";
import Tablerow from "./Tablerow";

const Table = (props) =>{

return( 
    <table>
        <thead>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
            </tr>
        </thead>
        <tbody>
            {props.data.map(Tablerow)}
        </tbody>
    </table>
);

};

export default Table;
