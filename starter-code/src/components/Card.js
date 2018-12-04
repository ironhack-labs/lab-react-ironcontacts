import React from 'react';

class Card extends React.Component {
   constructor() {
       super()
   }
   render() {
       return (
       <div>
        

        <tr>
           <td> <img src={this.props.pictureUrl} alt=""/></td>
           <td> <h1>{this.props.name}</h1></td>
           <td><h1>{this.props.popularity}</h1></td>
        </tr>
       </div>
       );
   }
}

export default Card;