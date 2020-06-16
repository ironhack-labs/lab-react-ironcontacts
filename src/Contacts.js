import React from 'react';



function Contacts(props){
    return (
        <div>
        <h1>IronContacts</h1>
        
            <div style = {{display:'flex', padding:'20px', textAlign:'center'}}>
                <div>
                    <button onClick={() => {props.deleteContact(props.name)} }>Delete</button>
                    <h2><strong>Picture</strong></h2>
                    <img style={{width:'100px'}}src={props.pictureUrl}></img>
                </div>
                <div style = {{ padding:'0 30px'}}>
                    <h2><strong>Name</strong></h2>
                    <h2>{props.name}</h2>
                </div>
                <div>
                    <h2><strong>Popularity</strong></h2>
                    <h2>{props.popularity}</h2>
                </div>

            </div>
            

            
            
            
        </div>
    )

}

export default Contacts