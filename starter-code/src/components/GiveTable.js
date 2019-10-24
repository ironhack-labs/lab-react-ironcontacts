import React, { Component } from 'react';
import contacts from '../contacts.json'
import Row from './Row'


class GiveTable extends Component {

    state = {
        contacts: contacts.slice(0, 5)
    }
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td>
                            Picture
                        </td>
                        <td>
                            Name
                        </td>
                        <td>
                            Popularity
                        </td>
                    </tr>
                    {this.state.contacts.map((oneContact, index) => {
                        return <tr>
                            <Row picture={oneContact.pictureUrl} name={oneContact.name} popularity={oneContact.popularity}></Row>

                        </tr>
                    })
                    }

                </table>

            </div >
        );
    }
}


export default GiveTable