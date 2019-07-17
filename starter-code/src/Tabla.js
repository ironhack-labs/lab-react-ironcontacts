import React, { Component } from 'react'

export default class Tabla extends Component {

    render() {
        return (
         <tr>
                <td>{this.props.paco.name}</td>
                   
              <td> <img src={this.props.paco.pictureUrl} alt=""/></td>
              
                <td>{this.props.paco.popularity}</td>
                </tr>
               
         ) }        
        
    }



// {
//     this.props.sections.map ((section, idx) => 
//         <li className={(this.state.chosenSection === idx) ? "tab selected" : "tab"} key={idx} onClick={() => this.clickTab(idx)}>{section}</li>
//     )
// }