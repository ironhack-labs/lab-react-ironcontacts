import React from "react";
import Contact from "./Contact"


const Table = ({celebrities,deleteItem})=>(
    <div>
        <table >
            <tbody>
						<tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
						</tr>

						{celebrities.map( (celebrity,index) =><Contact deleteItem={() => deleteItem(index)} key={index} {...celebrity}/> )}
						
						</tbody>
        </table>
    </div>
);

export default Table;