import { Component } from "react"
import contacts from "./contacts.json"
import Contact from "./Contact"

class DynamicContacts extends Component {

    constructor() {

        super()
        this.state = {
            contacts: contacts.slice(0, 5)
        }

    }

    render() {
        return (
            <>
                <table width="50%">
                    <tbody>
                        <tr>
                            <td><p>Picture</p></td>
                            <td>Name</td>
                            <td>Popularity</td>

                        </tr>
                        {this.state.contacts.map(elm => <Contact  {...elm} />)}
                    </tbody>
                </table>


            </>
        )
    }

}


export default DynamicContacts