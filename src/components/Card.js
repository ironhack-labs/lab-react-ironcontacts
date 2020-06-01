import React from 'react';
import './Card.css';

function Card (props) {
    return (
        <div className="container">
            <table className="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">Picture</th>
                    <th scope="col">Name</th>
                    <th scope="col">Popularity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="regularTd"><img src={props.pictureUrl} alt="" width="150" height="200"/></td>
                    <td className="regularTd">{props.name}</td>
                    <td className="regularTd">{props.popularity}</td>
                    <td className="specialTd"><button onClick={props.clickToDelete}>Delete</button></td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Card;