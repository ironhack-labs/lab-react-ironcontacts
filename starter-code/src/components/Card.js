import React from "react";
// import { Card } from "../styles/components";

function CardComponent(props) {
    console.log(this.props)
    return (
        <div id="row-container">
             <div id="row" key={this.props.key}>
              <div> <img src={this.props.pictureUrl} alt="famousPeople" /> </div>
              <div> {this.props.name} </div>
              <div> {this.props.popularity} </div>
            </div>
        </div>
        );
    }
  

    
export default CardComponent;