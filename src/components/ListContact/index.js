import React from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';
import "./list-contact.css";

/*

id: "11731993-0604-4bee-80d5-67ad845d0a38"
name: "Idris Elba"
pictureUrl: "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg"
popularity: 11.622713
*/

const list = require('../../contacts.json');

const shortList = list.filter((contact, index) => {
    if (index < 5) {
        return contact;
    }
});

console.log(list);

class ListContact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shortList: shortList,
            list: list
        };
    }

    // const {list, shortList} = props;

    findRandomPick = (random) => {
        console.log(random);
        const ind = this.state.list.find((ind, index, arr) => {
            if(index === random ) {
                this.state.list.splice(index, 1);
                return ind;
            }
        })

        console.log('random ind: ', ind);
        return ind;
    }

    addContact = (e) => {
        console.log("add-contact");
        e.preventDefault();
        const randomNum = Math.floor(Math.random() * (this.state.list.length - this.state.shortList.length - 1 + 1)) + this.state.shortList.length - 1;
        const randomPick = this.findRandomPick(randomNum)

        const newShortList = [...this.state.shortList];
        newShortList.push(randomPick);

        this.setState({
            shortList: newShortList
        });
    }

    sortByName = (e) => {
        e.preventDefault();
        console.log('Sort by Name');

        const newShortList = [...this.state.shortList];
        console.log(newShortList);
        newShortList.sort((a,b) => {
            return a["name"].localeCompare(b["name"]);
        })

        console.log(newShortList);

        this.setState({
            shortList: newShortList,
        })

    }

    sortByPop = (e) => {
        e.preventDefault();
        console.log('Sort by Popularity');

        const newShortList = [...this.state.shortList];

        newShortList.sort((a,b) => {
            return b["popularity"]-a["popularity"];
        })

        console.log(newShortList);

        this.setState({
            shortList: newShortList,
        })

        
        
    }

    render() {
        return (
            <div className="list-contact">
                <div className="actions-btns">
                    <button id="add-new" onClick= {(e) => this.addContact(e)}>
                        Add a New Contact
                    </button>

                    <button id="sort-name" onClick= {(e) => this.sortByName(e)}>
                        Sort by name
                    </button>

                    <button id="sort-popularity" onClick= {(e) => this.sortByPop(e)}>
                        Sort by popularity
                    </button>
                </div>
                
                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.shortList.map((individu, index) => (
                            <tr 
                                key={index}
                                className = "individu"
                            >
                                <td> 
                                    <img 
                                        src={individu.pictureUrl}
                                        alt = {individu.name}
                                        className="individu-img"  
                                    />
                                </td>
                                <td className = "individu-name">{individu.name}</td>
                                <td className = "individu-popularity">
                                    {individu.popularity}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> 
        );
    };
};

export default ListContact;
