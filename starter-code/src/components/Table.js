import React, { Component } from "react";
import TRow from "./TRow.js";

class Table extends Component{
    render() {
        const arr = this.props.contacts.map((contact,idx)=>{
            return <TRow onClick={this.props.onClick} contact={contact} key={idx} idx={idx}/>;
        })
        return (
            <table>
                <thead>
                    <tr><th>Picture</th><th>Name</th><th>Popularity</th><th>Action</th></tr>
                </thead>
                <tbody>
                    {arr}
                </tbody>
            </table>
        )
    }
}

export default Table