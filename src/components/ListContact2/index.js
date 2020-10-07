import React from 'react';
import "./list-contact.css";
import {BsStarFill, BsTrash} from 'react-icons/bs';

import Navbar from '../Navbar';

const list = require('../../contacts.json');

const shortList = list.filter((contact, index) => {
    if (index < 5) {
        return contact;
    }
});


class ListContactV2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shortList: shortList,
            list: list, 
            isInGrid: false,
            toggleBtnText: 'In Grid',
        };

        this.deleteContact = this.deleteContact.bind(this)
    }

    findRandomPick = (random) => {
        const ind = this.state.list.find((ind, index, arr) => {
            if (index === random) {
                this.state.list.splice(index, 1);
                return ind;
            }
        });
        
        return ind;
    };

    addContact = (e) => {
        console.log("add-contact");
        e.preventDefault();
        const randomNum = Math.floor(Math.random() * (this.state.list.length - this.state.shortList.length - 1 + 1)) + this.state.shortList.length - 1;
        const randomPick = this.findRandomPick(randomNum)

        const newShortList = [...this.state.shortList];
        newShortList.push(randomPick);

        this.setState({shortList: newShortList});
    };

    sortByName = (e) => {
        e.preventDefault();
        console.log('Sort by Name');

        const newShortList = [...this.state.shortList];
        console.log(newShortList);
        newShortList.sort((a, b) => {
            return a["name"].localeCompare(b["name"]);
        })

        console.log(newShortList);

        this.setState({shortList: newShortList})
    };

    sortByPop = (e) => {
        e.preventDefault();
        console.log('Sort by Popularity');

        const newShortList = [...this.state.shortList];

        newShortList.sort((a, b) => {
            return b["popularity"] - a["popularity"];
        })

        console.log(newShortList);

        this.setState({shortList: newShortList})
    };

    deleteContact = (e, num) => {
        console.log('deleteContact');
        e.preventDefault();

        console.log(num);
        const newShortList = [...this.state.shortList];
        console.log(newShortList);

        const filtredList = newShortList.filter((contact, index) => {
            if (index !== num) {
                return contact;
            };
        });
        console.log(filtredList);

        this.setState({shortList: filtredList});

    };

    toggleDisplay = (e) => {
        e.preventDefault();

        if(this.state.isInGrid) {
            this.setState({
                toggleBtnText: 'In Grid'
            });
        } else {
            this.setState({
                toggleBtnText: 'In Row'
            });
        }
        this.setState({
            isInGrid: !this.state.isInGrid
        });
        console.log(this.state.isInGrid);

    }

    
    render() {
        const {toggleBtnText, isInGrid} = this.state;
        return (
            <div className="list-contact">
                
                <Navbar 
                    addContact={this.addContact}
                    sortByName={this.sortByName}
                    sortByPop={this.sortByPop}
                    toggleDisplay= {this.toggleDisplay}
                    toggleBtnText={toggleBtnText}
                    isInGrid={this.state.isInGrid}
                />

                {!isInGrid ? (
                    <table className="table">
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Picture</th>
                                <th>Name</th>
                                <th>Popularity</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.shortList.map((individu, index) => (
                            <tr key={index}
                                className="individu"
                            >
                                <td>{index +1}</td>
                                <td>
                                    <img src={
                                            individu.pictureUrl
                                        }
                                        alt={
                                            individu.name
                                        }
                                        className="individu-img"/>
                                </td>
                                <td className="individu-name">
                                    {
                                    individu.name
                                } </td>
                                <td className="individu-popularity">
                                    {
                                    individu.popularity
                                } </td>
                                <td>
                                    <button
                                        className="btn btn-delete"
                                        onClick={(e) => {this.deleteContact(e, index)}
                                    }>
                                        <span>Delete</span> <BsTrash />
                                    </button>
                                </td>
                            </tr>))}
                        </tbody>
                    </table>
                ) : (
                    <div className="container"> 
                        <div className="grid list">
                            {this.state.shortList.map((individu, index) => 
                            (
                                <div
                                    key={index}
                                    className="item individu"
                                >
                                    <div className="visu">
                                        <img 
                                            src={individu.pictureUrl}
                                            alt={individu.name}
                                            className="individu-img"
                                        
                                        />
                                    </div>
                                    
                                
                                    <p className="individu-name">
                                        {individu.name}
                                    </p>
                                
                                
                                    <p className="individu-popularity">
                                        <BsStarFill /> {individu.popularity.toFixed(2) }
                                    </p>
                                    <div className="action-btn">
                                        <button className="btn btn-delete" onClick={(e) => {this.deleteContact(e, index)}}>
                                            <BsTrash color="white" size={30}/>
                                        </button>
                                    </div>
                                    
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                
                
            </div>
        );
    };
};

export default ListContactV2;
