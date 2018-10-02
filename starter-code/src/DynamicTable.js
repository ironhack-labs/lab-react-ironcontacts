import React, { Component } from 'react';
import contacts from './contacts.json';
import Contact from './Contact';
import Button from './Button';

class DynamicTable extends Component {
    constructor() {
        super();
        this.state = {
            showing: contacts.splice(0,5),
            all: contacts
        };
    };

    inserRandom = () => {
        let index = Math.round(Math.random() * this.state.all.length);
        const all = this.state.all;
        const showing = this.state.showing;
        showing.unshift(all.splice(index,1)[0]);

        this.setState({all: all});
        this.setState({showing: showing})
    }

    render() {
        return(
            <div>
                <Button onClick={this.inserRandom}>Add random contact</Button>
                <table>
                    <tbody>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>
                        {this.state.showing.map(e => <Contact name={e.name} pictureUrl={e.pictureUrl} popularity={e.popularity} key={e.name}></Contact>)}
                    </tbody>
                </table>
            </div>

        )
    };
};

export default DynamicTable;