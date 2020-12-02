import React, { Component } from 'react'

export default class ContactCard extends Component {
    
    render() {
        
        return (
            
            <div className='wrapper'>
            {/* {console.log(this.props)} */}
                <img src={this.props.pictureUrl} alt=""/ >
                <p className='unit' >{this.props.name}</p>
                <p className='unit' >{this.props.popularity}</p>
                <button className='delete' onClick={()=>this.props.deleteContact(this.props.id)}>Delete</button>
            </div>
        )
    }
}



