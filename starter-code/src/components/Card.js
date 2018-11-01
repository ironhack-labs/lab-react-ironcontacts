import React from 'react';
const Card = (props) => {
    let awardText;
    if(props.hasOscars){
        if(props.IMDbRating >= 9){
            awardText = <p> WOW! Oscar Award and IMDb rating {props.IMDbRating}! </p>
        } else if(props.IMDbRating >= 7){
            awardText = <p> Got the Oscar Award and has IMDb rating {props.IMDbRating}, not bad at all! </p>
        }
    } else {
        awardText = <p> Great movie but no Oscars! Has IMDb rating {props.IMDbRating}. </p>
    }
    return (
        <div  className="movies-list-item">
            <h2>{props.title}</h2>
            <p>Director: {props.director}</p>
            {awardText}
            { props.hasOscars && <p>Got the Oscar Award! 😉 </p> }
            { !props.hasOscars && <p>Great movie but no Oscars! 😔 </p> }

            <button onClick={props.clickToDelete}>Delete</button>
        </div>
    )
};

export default Card;