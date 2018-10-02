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
        this.setState({showing: showing});
    };

    sortByName = () =>{
        const showing = this.state.showing;
        showing.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        this.setState({showing: showing});
    };

    sortByPopularity = () =>{
        const showing = this.state.showing;
        showing.sort((a,b) => (a.popularity > b.popularity) ? -1 : ((b.popularity > a.popularity) ? 1 : 0));
        this.setState({showing:showing});
    };

    delete = (key) => {
        const showing = this.state.showing;
        const index = showing.map(e => e.name).indexOf(key.name)
        showing.splice(index,1);
        this.setState({showing:showing});
    }

    render() {
        return(
            <div>
                <Button onClick={this.inserRandom}>Add random contact</Button>
                <Button onClick={this.sortByName}>Sort by name</Button>
                <Button onClick={this.sortByPopularity}>Sort by popularity</Button>

                <table>
                    <tbody>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>
                        </tr>
                        {this.state.showing.map(e => <Contact name={e.name} pictureUrl={e.pictureUrl} popularity={e.popularity} key={e.name} deleteAction={this.delete}></Contact>)}
                    </tbody>
                </table>
            </div>

        )
    };
};

export default DynamicTable;