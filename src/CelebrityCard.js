import React from "react";
import './CelebrityCard.css'
const CelebrityCard = ({ name, image, popularity, id }) => {

    return (
        <div className="celebrity-card">

            <table>
                <tbody>
                    <tr>
                        <td><img src={image} /></td>
                        <td>{name}</td>
                        <td>{popularity}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default CelebrityCard