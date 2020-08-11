import React, { Component } from 'react'

export default class Table extends Component {
    render() {
        return (

            <div className = 'App-header'>
                <table>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                </tr>
                <tr>
                     <td>

                    <img src = {this.props.pictureUrl} width = '100px'/>
                    </td>
                
                
                     <td>
                    {this.props.name}
                    </td>
                
                
                     <td>
                    {this.props.popularity.toFixed(2)}
                    </td>
                    <td>
                        <button onClick={()=>this.deleteContact(this.props.id)}>Delete</button>
                    </td>
                </tr>
                </table>
            </div>
            
        )
    }
}

