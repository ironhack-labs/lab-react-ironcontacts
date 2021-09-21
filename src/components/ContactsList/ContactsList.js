import './ContactsList.css'
import profiles from '../../contacts.json';
import RandomContact from '../RandomContact/RandomContact'
import React from 'react';


class ContactsList extends React.Component {
    constructor(props) {
        super(props)
        this.displayedProfiles = [...profiles].splice(0, 5)
        this.profilesList = profiles

        this.state = {
            profilesList: this.profilesList,
            displayedProfiles: this.displayedProfiles
        }
    }

    updateContacts = () => {

        const index = (Math.floor(Math.random() * this.state.profilesList.length))
        const newContact = this.state.profilesList[index]
        const copyDisplayedProfiles = [...this.state.displayedProfiles]
        const copyProfilesList = [...this.profilesList]

        copyDisplayedProfiles.push(newContact)
        copyProfilesList.splice(index, 1)

        this.setState({
            displayedProfiles: copyDisplayedProfiles,
            profilesList: copyProfilesList 
        })

    }

    render() {
        return (
            <div className="list-of-contacts">
                <h2>IronContacts</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>

                        {this.state.displayedProfiles.map((profile, idx) => {
                            return (
                                <tr className="profile-item" key={`${idx}-${profile.name}`}>
                                    <td className="column"><img src={profile.pictureUrl} alt={profile.name} /></td>
                                    <td>{profile.name}</td>
                                    <td>{profile.popularity.toFixed(2)}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                <RandomContact updateContacts = {() => this.updateContacts()} />

            </div>
        )
    }

}

export default ContactsList