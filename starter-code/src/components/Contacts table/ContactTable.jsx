import React, { Component } from 'react'
import "./table.css"

export default class ContactTable extends Component {
    render() {
        return (
            
            <table>
               
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.contactsPro.map((e, idx)=>{
                    return <tr key={idx}>
                       <td><img className="img-table" src={e.pictureUrl} /></td>
                        <td>{e.name}</td>
                        <td>{e.popularity.toFixed(2)}</td>
                    </tr>
                })}

                </tbody>
            </table>
        )

    }
}
            
