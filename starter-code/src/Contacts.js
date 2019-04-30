import React, { Component } from 'react'
import Contact from './Contact'

export default class Contacts extends Component {
    render() {
        return (
            <React.Fragment>
                <table class="trAlign">
                    <tbody >
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                </tr>
                </tbody>

                <tbody>
                {this.props.contacts.map((contact,index) => {
                    return <Contact
                    picture = {contact.pictureUrl}
                    name = {contact.name}
                    popularity = {contact.popularity}
                    key = {contact.idx}
                    />
                })}
                </tbody>
                </table>
            </React.Fragment>
        )
    }
}
