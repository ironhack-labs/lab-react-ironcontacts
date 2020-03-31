import React, { Component } from "react";
import './Table.css';
import Display from "./Display";


class Table extends Component {
    render() {
        return (
                <table className="table-contacts">
                    <tr className="title-table">
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                    {this.props.contacts.map((contact, index) => (
                        <Display
                            key={index}
                            name={contact.name}
                            pictureUrl={contact.pictureUrl}
                            rating={(contact.popularity).toFixed(2)}
                        />
                    ))}
                </table>
        )
    }
}

export default Table;

