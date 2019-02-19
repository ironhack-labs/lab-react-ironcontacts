import React from 'react';
import './ContactsTable.css';

export default class ContactsTablet extends React.Component {
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
                {this.props.contacts.map((e, idx) => {
                    return idx < +this.props.contacts.length && <tr key={idx}>
                        <td><img className="img-table" src={e.pictureUrl} /></td>
                        <td>{e.name}</td>
                        <td>{e.popularity.toFixed(2)}</td>
                        <td><button onClick={() => this.props.deleteFunction(e.name)}>Delete</button></td>
                    </tr>
                })}
                </tbody>
            </table>
        )
    }
}