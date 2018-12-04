import React from 'react';

class Card extends React.Component {
   constructor() {
       super()
   }
   render() {
       return (
         <div>
           
            <img src={this.props.pictureUrl} alt=""/>
            <h1>{this.props.name}</h1>
            <h1>{this.props.popularity}</h1>
          
       </div>
       );
   }
}

export default Card;