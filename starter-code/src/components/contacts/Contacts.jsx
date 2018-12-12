import React, { Component } from 'react';



 class Contact extends Component {       
     render() {
         return (


             <tr className="Contact">
                <td><img src={this.props.pictureUrl} width="20%"></img></td>
                 <td>{this.props.name}</td>
                 <td>{this.props.popularity}</td>
             </tr>



         );
     }
 }

 export default Contact;