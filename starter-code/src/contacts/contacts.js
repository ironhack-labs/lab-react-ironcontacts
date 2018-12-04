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
    render() {
        return (
            <div>
                <button onClick={this.addCelebrities}>Add Random Contact</button>
                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.celebrities.map((celebrity, index) => {
                            console.log(celebrity)
                            return (
                                <div className="Contacts">
                                    <tr>
                                        <td><img src={celebrity.pictureUrl} /></td>
                                        <td>{celebrity.name}</td>
                                        <td>{celebrity.popularity}</td>
                                    </tr>
                                </div>
                            )
                        }
                        )}
                    </tbody>
                </table>
            </div>



        )
    }


}
export default Contact;