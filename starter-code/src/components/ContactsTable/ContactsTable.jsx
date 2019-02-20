import React from 'react';
import './ContactsTable.css'
import FunctionButton from '../FunctionButton/FunctionButton';

export default class ContactTable extends React.Component {
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
                    {this.props.contactsProp.map((e, idx) => {
                        return <tr key={idx}>
                            <td><img className="img-table" src={e.pictureUrl} /></td>
                            <td>{e.name}</td>
                            <td>{e.popularity.toFixed(2)}</td>
                            <td><FunctionButton functionProp={() => this.props.deleteProp(e.name)}>Delete</FunctionButton></td>
                        </tr>
                    })}
                </tbody>
            </table>
        )
    }
}