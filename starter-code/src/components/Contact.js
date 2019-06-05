import React from 'react';

const Table = props => {
    return (
        
            <tbody>

                {/* <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                </tr> */}
            {/* </tbody>
            <tbody> */}
                <tr className="contacts-list-item">
                    <td><img className="photo" src={props.pictureUrl}/></td>
                    <td>{props.name}</td>
                    <td>{props.popularity}</td>
                </tr>
            </tbody>
            /* <button onClick={props.removeMovieFromState}>Eliminar</button> */
           
        
    )
};

export default Table;
