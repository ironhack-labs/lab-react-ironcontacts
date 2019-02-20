import React, { Component } from 'react'
import FunctionButton from '../FunctionButton/FunctionButton';

export default class Mytable extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>picture</th>
                            <th>name</th>
                            <th>popularity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.contactsProp.map((e, idx) =>{
                            return <tr key={idx}>
                                <td><img className="img-table"src= {e.pictureUrl}/></td>
                                <td>{e.name}</td>
                                <td>{e.popularity.toFixed(2)}</td>
                                <td><FunctionButton functionProp={() => this.props.deleteProp(e.name)}>Delete</FunctionButton></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
