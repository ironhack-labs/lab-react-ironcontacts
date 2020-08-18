import React from 'react'




function ContactDetails(props){

    let containerStyles = {
        display: 'flex',
        justifyContent: "space-around"
        // marginLeft: props.margin *10 + 'px'
    }

    let pictureStyle = {
        width: "50px",
        height: "75px"
    }

    let deleteStyle = {
        height: "25px"
    }

 
    return (
        <div style={containerStyles}>
            <img style={pictureStyle} src={props.contact.pictureUrl}/>  
            <p>{props.contact.name}</p>
            <p>{props.contact.popularity}</p>
            <button style={deleteStyle} onClick={() => props.onDelete(props.id)}>Delete</button>
        </div>
    )
}



export default ContactDetails


/*
<button onClick={() => props.onDelete(props.id) }>Delete</button>
*/