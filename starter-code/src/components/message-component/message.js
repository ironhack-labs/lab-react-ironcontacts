import React from 'react';
import './message.css';
class Message extends React.Component {
 
    render() {
    
        console.log('entered message', this.props.show)
if(this.props.show){
    return (
        <div className="mes-body">
         <div className="message">
            <h2>Are you sure you want to delete this contact?</h2>
            <button onClick={this.props.changeShow}>Yes </button>
            <button onClick={this.props.changeShow}>Cancel</button>
        </div>
        </div>
    )
} else {
    return null;
}
       
    }
}
export default Message;