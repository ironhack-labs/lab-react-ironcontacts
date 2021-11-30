import React from "react";

const CelebrityCard = ({ name, image, popularity, id }) => {

    return (
        <div className="celebrity-card">
            <img src={image} />
            <p>{name}</p>
            <p>{popularity}</p>
        </div>
    )
}

export default CelebrityCard