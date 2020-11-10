import React from "react";

const Movies5 = (props) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Picture </th>
                        <th>Name </th>
                        <th>Popularity </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th> <img src={props.pictureUrl} style={{width:100}}/></th>
                        <th> {props.name}</th>
                        <th>{props.popularity}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Movies5;
