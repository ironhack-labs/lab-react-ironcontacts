
import React, { Component } from 'react';
import "./style.css";

class IdCard extends Component {

    redondearDecimales(num){
        return Math.round(num.pop * 100) / 100;
    }
   
    render(){
        const { name, img, pop } = this.props;
        return (
            <div className="ml-29 inLine mt-30">
                <div className="with20"> 
                    <img alt={name} src={img} height={158} width={125}/> 
                </div>
                <div className="with20"> {name} </div>
                <div className="with20"> {this.redondearDecimales({pop})} </div>
            </div>
        )
    }
}

export default IdCard;