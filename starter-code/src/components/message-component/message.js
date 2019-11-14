import React from 'react';
import './message.css';
class Message extends React.Component {
 confirm = (val) => {
     this.props.setDeleteFlag(val);
     this.props.changeShow();
 }
    render() {
if(this.props.show){
    return (
        <div className="mes-body">
         <div className="message">
            <h2>Are you sure you want to delete this contact?</h2>
            <div className="controls">
               <button onClick={()=>{this.confirm(true)}}>Yes </button>
               <button onClick={() => {this.confirm(false)}}>Cancel</button>
            </div>
        </div>
        </div>
    )
} else {
    return null;
}
       
    }
}
export default Message;