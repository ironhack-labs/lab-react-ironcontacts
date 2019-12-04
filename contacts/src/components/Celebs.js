import React from 'react'



const Celebs = props => {

    return (
        <>
            <section className="container">
                <div className="row justify-content-center">
                    <img className="col-2 image" src={props.pictureUrl} alt={props.name} ></img>
                    <div className="col-2"><h5>{props.name}</h5></div>
                    <div className="col-2"><h5>{props.popularity}</h5></div>
                    <button onClick={props.deleteCeleb} className="btn btn-danger smallMe col-2">Delete</button>
                </div>
            </section >
        </>
    )
}


export default Celebs