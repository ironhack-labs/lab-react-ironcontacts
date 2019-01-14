import React from 'react';
import { Button } from './Button';

export class Row extends React.Component{
    delete(ctx){
        ctx[0].deleteItem(ctx[1])
    }
    render(){
        return(
            <tr>
                <th><img width="100px" src={this.props.img} alt={this.props.name}/></th>
                <th>{this.props.name}</th>
                <th>{this.props.popularity}</th>
                <th><Button func={()=>this.delete(this.props.ctx)}>Delete</Button></th>
            </tr>
        )
    }
}