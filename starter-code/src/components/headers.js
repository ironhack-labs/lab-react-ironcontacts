import  React, { Component } from 'react';

const Headers = props => {

    return (
        <header>
             <div  className = "container subtitles">
            <div className='row'>
            <h3>{props.title}</h3>
            </div>
            <div className='row'>
            <div className="col-sm-4"> {props.subtitlea} </div>
            <div className="col-sm-4"> {props.subtitleb} </div>
            <div className="col-sm-4"> {props.subtitlec} </div>
            </div>
            </div>
        </header>
    )
}

export default Headers