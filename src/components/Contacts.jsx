import React, { Component } from 'react'

export class Contacts extends Component {

    render() {
   
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th className='title' colSpan="3">Producers</th>
                        </tr>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.contacts.map((contact, i) => <ContactRow key={i} {...contact} handleDelete={this.props.handleDelete}/>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

class ContactRow extends Component{

    render() {
        return (
            <tr>
                <th>
                    <img src={this.props.pictureUrl} alt={this.props.name} />
                </th>
                <th>{this.props.name}</th>
                <th>{this.props.popularity.toFixed(2)}</th>
                <th><button onClick={() => this.props.handleDelete(this.props.id)}>Delete</button></th>
            </tr>
        )
    }
}

export default Contacts
