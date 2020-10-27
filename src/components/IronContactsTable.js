import React, {useState} from 'react'
import contacts from '../contacts.json';

import CelebrityDetail from './celebritydetails/CelebrityDetails'

const IronContactsTable = () => {

    const [contactsList, setContactsList] = useState(contacts.slice(0,5))

    const addRandom = () => {
        let randomContact = contacts[Math.floor(Math.random() * contacts.length)]
        
        let clonedContacts = [...contactsList]
        clonedContacts.push(randomContact)

        setContactsList(clonedContacts)
    }

    const sortByName = () => {
        let clonedContacts = [...contactsList]

        clonedContacts.sort((a,b) => {
            if (a.name > b.name) {
                return 1
            }
            else if (a.name < b.name) {
                return -1
            }
            else {
                return 0
            }
        })

        setContactsList(clonedContacts)
    }

    const sortByPop = () => {
        let clonedContacts = [...contactsList]

        clonedContacts.sort((a,b) => {
            if (a.popularity > b.popularity) {
                return -1
            } if (a.popularity < b.popularity) {
                return 1
            } else {
                return 0
            }
        })

        setContactsList(clonedContacts)
    }

    const deleteCeleb = (celebId) => {
        let clonedContacts = [...contactsList]

        let filteredCelebs = clonedContacts.filter((celeb) => {
            return celeb.id !== celebId
        })

        setContactsList(filteredCelebs)
    }

    return (
        <React.Fragment>
            <button onClick={addRandom}>Add random contact</button>
            <button onClick={sortByName}>Sort by name</button>
            <button onClick={sortByPop}>Sort by popularity</button>
            <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                </thead>
                <tbody>
                    {contactsList.map((celebrity) => {
                        return <CelebrityDetail key={celebrity.id} details={celebrity} deleteFunc={deleteCeleb}/>
                    })}
                </tbody>
            </table>

        </React.Fragment>
    )
}

export default IronContactsTable