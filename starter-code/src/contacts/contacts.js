import React from "react";
import Contacts from "../contacts.json"
import './contacts.css';;

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            celebrities: Contacts.slice(0, 5)
        }
    }
    otherCelebrities = [...Contacts]
    addCelebrities = () => {
        let randomCelebrity = [...this.state.celebrities]

        randomCelebrity.push(this.otherCelebrities[Math.floor(Math.random() * this.otherCelebrities.length)])
        this.setState({
            celebrities: randomCelebrity
        })
    }

    sortByName = () => {

        let sortedCelebrity = [...this.state.celebrities]
        sortedCelebrity.sort(function (a, b) {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });
        // console.log(sortedCelebrity)
        this.setState({
            celebrities: sortedCelebrity
        })
    }
    sortByPopularity = () => {

        let sortedCelebrity = [...this.state.celebrities]
        sortedCelebrity.sort(function (a, b) {
            if (a.popularity < b.popularity) return 1;
            if (a.popularity > b.popularity) return -1;
            return 0;
        });
        this.setState({
            celebrities: sortedCelebrity
        })
    }
    removeCelebrities = () => {
        let removeCelebrities = [...this.state.celebrities]
        removeCelebrities.splice(0, 1)
        this.setState({
            celebrities: removeCelebrities
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.addCelebrities}>Add Random Contact</button>
                <button onClick={this.sortByName}>Sort by Name</button>
                <button onClick={this.sortByPopularity}>Sort by Popularity</button>
                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.celebrities.map((celebrity, index) => {
                            // console.log(celebrity)
                            return (
                                <div className="Contacts">
                                    <tr>
                                        <td><img src={celebrity.pictureUrl} /></td>
                                        <td>{celebrity.name}</td>
                                        <td>{celebrity.popularity}</td>
                                        <td><button onClick={this.removeCelebrities}>Remove</button></td>
                                    </tr>
                                    
                                </div>
                            )
                        }
                        )
                        }
                    </tbody>
                </table>
            </div>

        )
    }


}
export default Contact;