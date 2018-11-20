import React, {Component} from  'react';
import contacts from '../contacts';
import Column from './Columns'
import styles from './Home.module.css';
import Random from './Random'
import Name from './Name'
import Popularity from "./Popularity";


class Home extends Component {

    constructor(){
        super();
        this.state = {
            newContacts: []
        }
    };

    componentWillMount(){
        this.getFiveContacts();
    }

    getFiveContacts = () => {
        //let {newContacts} = this.state;
        let [...onlyFive] = contacts;
        onlyFive.length = 5;
        this.setState({newContacts:onlyFive});
    };

    getRandomContact = () => {
        let {newContacts}=this.state;

        //if(newContacts.length > 5) newContacts.pop();

        let i = Math.floor((Math.random() * 199) + 5);
        newContacts.push(contacts[i])

        this.setState({newContacts})
    };

    sortByName = () => {
        let {newContacts} = this.state;
        newContacts.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        this.setState({newContacts})
    }

    sortByPopularity = () => {
        let {newContacts} = this.state;
        newContacts.sort((a,b) => (a.popularity > b.popularity) ? -1 : ((b.popularity > a.popularity) ? 1 : 0));
        this.setState({newContacts})
    }

    deleteContact = (i) => {
        let {newContacts} = this.state;

        newContacts.splice(i, 1)
        this.setState({newContacts});
    }

    render(){
        return(
            <div className={styles}>
                <Random getRandom={this.getRandomContact}/>
                <Name byName={this.sortByName}/>
                <Popularity byPopularity={this.sortByPopularity}/>
                <table>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Action</th>
                    </tr>
                    {this.state.newContacts.map((contact, i) => <Column key={i} contact={contact} index={i} deleteItem={this.deleteContact} />)}
                </table>
            </div>
        )
    }
}

export default Home;