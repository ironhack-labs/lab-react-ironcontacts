import React from 'react'

function ContactDetails(props){

    let containerStyles ={
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: '50px'

    }
    let imgSize ={
        height: '300px',

    }
    let btnStyles ={
        height:'25px',
        width:'100px', 
        margin:'25px',
        background:'red',
        border:'2px solid black',
        color: 'white'

    }

    return(
        <div  style={containerStyles}>
        <img style={imgSize} src={props.contact.pictureUrl}/>
        <h1>{props.contact.name}</h1>
        <h1>{props.contact.popularity}</h1>
        <button onClick={()=>props.onDelete(props.index)} style={btnStyles}>Delete</button>
        </div>
        ) 
}

export default ContactDetails