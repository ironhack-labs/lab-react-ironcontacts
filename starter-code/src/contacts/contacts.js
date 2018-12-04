import React from "react";
import Contacts from "../contacts.json"

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            celebrities: Contacts.slice(0, 5)
        }

    }
    render() {

        var celebritiesList = this.state.celebrities.map((celebrity, index) => {
            return (
                <div className="Contacts">
                    <tr>
                        <td key={index}><img src={celebrity.pictureUrl} /></td>
                        <td key={index}>{celebrity.name}</td>
                        <td key={index}>{celebrity.popularity}</td>
                    </tr>
                </div>
            )
        }
        );
        return (
            <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                </thead>
                <tbody>
                    {celebritiesList}
                </tbody>
            </table>


        )
    }


}
export default Contact;