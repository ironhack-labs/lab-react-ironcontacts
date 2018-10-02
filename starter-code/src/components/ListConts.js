import React, {Component} from 'react';
import {Contact} from './Contact';



export class ListConts extends Component {
    constructor(props){
        super(props);
        this.state = {
            enableContacts:true,
            
        }
    }



    render(){
    return (
        <div className="list">
            { this.props.data.map((e,i) => 
             <Contact idx={i} name={e.name} pictureUrl={e.pictureUrl} popularity={e.popularity} delete={this.props.delete} />) 
            }
            

        </div>
    )
  };
}

