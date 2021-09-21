import './ContactsList.css'
import profiles from '../../contacts.json';
import Button from '../Button/Button.js'
import React from 'react';


class ContactsList extends React.Component {
    constructor() {
        super()
        this.displayedProfiles = [...profiles].slice(0, 5)
        this.profilesList = [...profiles].slice(5)

        this.state = {
            profilesList: this.profilesList,
            displayedProfiles: this.displayedProfiles,
            descendingName: true,
            descendingPopularity: true

        }
        
        this.copyDisplayedProfiles = [...this.displayedProfiles]
        this.copyProfilesList = [...this.profilesList]

    }

    addRandomContact = () => {

        const index = (Math.floor(Math.random() * this.copyProfilesList.length))
        const newContact = this.state.profilesList[index]

        this.copyDisplayedProfiles.push(newContact)
        this.copyProfilesList = this.copyProfilesList.filter((profile) => {
            return profile.id !== newContact.id
        })

        this.setState({
            displayedProfiles: this.copyDisplayedProfiles,
            profilesList: this.copyProfilesList,
        })

    }

    sort = (sortType) => {

        switch(sortType) {
            case "name":
                if(!this.state.descendingName) {
                    const sortedName = this.copyDisplayedProfiles.sort((a, b) => a.name.localeCompare(b.name))
                    this.setState({ displayedProfiles: sortedName, descendingName:true})
                } else {
                    const sortedName = this.copyDisplayedProfiles.sort((a, b) => b.name.localeCompare(a.name))
                    this.setState({ displayedProfiles: sortedName, descendingName: false })
                }
                break;

            case "popularity":
                if(!this.state.descendingPopularity) {
                    const sortedPopularity = this.copyDisplayedProfiles.sort((a, b) => b.popularity - a.popularity)
                    this.setState({ displayedProfiles: sortedPopularity, descendingPopularity: true})
                } else {
                    const sortedPopularity = this.copyDisplayedProfiles.sort((a, b) => a.popularity - b.popularity)
                    this.setState({ displayedProfiles: sortedPopularity, descendingPopularity: false })
                }

                break;

            default:
                console.log("cannot sort by this criteria")
        }

    }

    delete = (id) => {
        
        this.copyDisplayedProfiles = this.copyDisplayedProfiles.filter((profile) => profile.id !== id)
        
        this.setState({
            ...this.state,
            displayedProfiles: this.copyDisplayedProfiles
        })
        
    }

    render() {
        return (
            <div className="list-of-contacts">
                <h2>IronContacts</h2>
                <table>
                    <tbody>
                        <tr className="spaceUnder">
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>

                        </tr>

                        {this.state.displayedProfiles.map((profile, idx) => {
                            return (
                                <tr className="profile-item spaceUnder" key={`${idx}-${profile.name}`}>
                                    <td><img src={profile.pictureUrl} alt={profile.name} /></td>
                                    <td>{profile.name}</td>
                                    <td>{profile.popularity.toFixed(2)}</td>
                                    <td><Button action={() => this.delete(profile.id)} text="Delete"/></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                <div className="buttons-container">
                    <Button action={() => this.addRandomContact()} text="Add new contact" />
                    <Button action={() => this.sort("name")} text="Sort by Name" />
                    <Button action={() => this.sort("popularity")} text="Sort by Popularity" />
                </div>
                

            </div>
        )
    }

}

export default ContactsList