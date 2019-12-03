import React from 'react'

const Starts = props => {
    return (
        <article className="container">
        <div className="row justify-content-center my-2">
            <img className="col-md-2" src={props.pictureUrl} alt={props.name}></img>
            <p className="col-md-2">{props.name}a</p>
            <p className="col-md-2">{props.popularity}b</p>
            <button onClick={props.deleteMovieHandler} className="col-md-2 btn btn-sm btn-danger align-self-center ht">Delete</button>
        </div>
        </article>
    )
}
export default Starts