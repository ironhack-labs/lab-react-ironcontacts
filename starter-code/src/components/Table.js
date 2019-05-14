import React from "react";
import Contact from "./Contact"


const Table = ({celebrities})=>(
    <div>
        <table >
            <tbody>
						<tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
						</tr>

						{celebrities.map( (celebrity)=><Contact {...celebrity}/> )}
						
						</tbody>
        </table>
    </div>
);

export default Table;