import React from "react";

const Table = (props) =>{

return( 
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
            {props.data.map((element) => {
                return (
                    <tr key={element.id}>
                        <td>
                            <img width="48px" src ={element.pictureUrl} alt="avatar"/>
                        </td>
                        <td>
                            <span>{element.name}</span>
                        </td>
                        <td>
                            <span>{element.popularity}</span>
                        </td>
                        <td>
                            <button onClick={() => props.clickToDelete(element.id)}>Delete</button>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    </table>
);

};

export default Table;
