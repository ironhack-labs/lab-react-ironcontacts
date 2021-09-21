import './ContactsList.css'
import profiles from '../../contacts.json';

const ContactsList = () => {

    const displayedProfiles = [...profiles].splice(0, 5)

    return (
        <div className="list-of-contacts">
            <h2>IronContacts</h2>
                <table>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>

                    {displayedProfiles.map(profile => {
                        return (
                            <tr className="profile-item">
                                <td className="column"><img src={profile.pictureUrl} alt={profile.name} /></td>
                                <td>{profile.name}</td>
                                <td>{profile.popularity.toFixed(2)}</td>
                            </tr>
                        )
                    })}
                </table>
        </div>
    )

}

export default ContactsList