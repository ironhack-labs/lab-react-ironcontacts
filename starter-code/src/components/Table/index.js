
import React, { Component } from 'react';
import "./style.css";

class Table extends Component {

    redondearDecimales(num){
        return Math.round(num.pop * 100) / 100;
    }
   
    render(){
        const { index, name, img, pop, deleteOne } = this.props;
        console.log("key", index);
        return (
            <div id={index} className="ml inLine mt-30">
                <div className="with20"> 
                    <img alt={name} src={img} height={158} width={125}/> 
                </div>
                <div className="with20"> {name} </div>
                <div className="with20"> {this.redondearDecimales({pop})} </div>
                <button onClick={() => deleteOne(index)} className="mt-30 btnRemove"> Delete </button>
            </div>
        )
    }
}

export default Table;