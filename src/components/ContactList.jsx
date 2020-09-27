import React, {useState} from 'react'
import ContactBox from './ContactBox'

const ContactList = (props) => {

    const [contactData, setContactData] = useState(props.contacts.slice(0, 5))
    const [nameBool, setNameBool] = useState(true)
    const [popBool, setPopBool] = useState(true)

    const onAddRandom = () => {
        const randomContact = props.contacts[Math.floor(Math.random() * props.contacts.length)]
        setContactData([...new Set([randomContact, ...contactData])])
    }

    const sortByName = () => {
        if (nameBool) {
            contactData.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
            setNameBool(false)
            setContactData([...contactData])
        } else {
            contactData.sort((a, b) => (b.name > a.name) ? 1 : ((a.name > b.name) ? -1 : 0))
            setNameBool(true)
            setContactData([...contactData])
        }
    }

    const sortByPopularity = () => {
        if (popBool) {
            contactData.sort((a, b) => (b.popularity > a.popularity) ? 1 : ((a.popularity > b.popularity) ? -1 : 0))
            setPopBool(false)
            setContactData([...contactData])
        } else {
            contactData.sort((a, b) => (a.popularity > b.popularity) ? 1 : ((b.popularity > a.popularity) ? -1 : 0))
            setPopBool(true)
            setContactData([...contactData])
        }
    }

    const deleteContact = (contact) => {
        console.log(props.contacts.length)
        setContactData([...contactData.filter(cont => cont.id !== contact.id)])
    }


    return (
        <div className="ContactList">
            <div className="row info btns-info">
                <div className="col-4">
                    <button className={contactData.length === 53 ? 'btn disabled' : 'btn'} onClick={onAddRandom}>
                        <svg viewBox="0 0 512 512"><path fill="currentColor" d="M504 96h-88V8c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v88h-88c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h88v88c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-88h88c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm-6.77 270.71l-99.72-42.87 99.72-42.87c8.35-3.6 12.19-13.23 8.58-21.52-3.65-8.29-13.32-12.13-21.74-8.48l-225.32 96.86c-1.81.77-3.74.77-5.48 0L45.23 258.4l193.45-83.16c8.35-3.59 12.19-13.23 8.58-21.52-3.65-8.28-13.26-12.13-21.74-8.48L14.81 235.81C5.81 239.66 0 248.52 0 258.4c0 9.87 5.81 18.74 14.77 22.58l99.73 42.87-99.7 42.85C5.81 370.55 0 379.42 0 389.31c0 9.87 5.81 18.74 14.77 22.58l225.32 96.84c5.06 2.17 10.48 3.28 15.9 3.28s10.84-1.09 15.9-3.28l225.29-96.83c9-3.85 14.81-12.72 14.81-22.59.01-9.89-5.8-18.76-14.76-22.6zM258.74 478.72c-1.81.77-3.74.77-5.48 0L45.23 389.29 156 341.68l84.1 36.15c5.06 2.17 10.48 3.28 15.9 3.28s10.84-1.09 15.9-3.28l84.12-36.16 110.78 47.62-208.06 89.43z"></path></svg>
                    </button>
                    <strong>Contact</strong>
                </div>
                <div className="col-4">
                    {nameBool ? <button className="btn" onClick={sortByName}>
                        <svg viewBox="0 0 448 512" ><path fill="currentColor" d="M432 288H304a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8l87.68.07-92.76 131.79a16 16 0 0 0-2.92 9.21V472a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8h-87.81l92.89-131.86a16 16 0 0 0 2.92-9.21V296a8 8 0 0 0-8-8zm15.29-80.06l-59.76-168A11.87 11.87 0 0 0 376.37 32h-16.74a11.87 11.87 0 0 0-11.16 7.94l-59.76 168A12 12 0 0 0 299.88 224H311a11.86 11.86 0 0 0 11.21-8.09l15.1-44.27h60.85L413.5 216a11.88 11.88 0 0 0 11.2 8h11.42a12 12 0 0 0 11.17-16.06zm-99.9-67.36s19.62-56.87 20.5-60c.87 3.14 20.24 60 20.24 60zm-148.46 231a11.93 11.93 0 0 0-16.91-.09l-54 52.67V40a8 8 0 0 0-8-8H104a8 8 0 0 0-8 8v383.92l-53.94-52.35a12 12 0 0 0-16.92 0l-5.64 5.66a12 12 0 0 0 0 17l84.06 82.3a11.94 11.94 0 0 0 16.87 0l84-82.32a12 12 0 0 0 .09-17z"></path></svg>
                    </button> : <button className="btn" onClick={sortByName}>
                            <svg viewBox="0 0 448 512" ><path fill="currentColor" d="M120.44 35.51a11.94 11.94 0 0 0-16.87 0l-84 82.32a12 12 0 0 0-.09 17l5.61 5.68a11.93 11.93 0 0 0 16.91.09l54-52.74V472a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V88.08l53.94 52.35a12 12 0 0 0 16.92 0l5.64-5.66a12 12 0 0 0 0-17zm326.85 172.43l-59.76-168A11.87 11.87 0 0 0 376.37 32h-16.74a11.87 11.87 0 0 0-11.16 7.94l-59.76 168A12 12 0 0 0 299.88 224H311a11.86 11.86 0 0 0 11.21-8.09l15.1-44.27h60.85L413.5 216a11.88 11.88 0 0 0 11.2 8h11.42a12 12 0 0 0 11.17-16.06zm-99.9-67.36s19.62-56.87 20.5-60c.87 3.14 20.24 60 20.24 60zM432 288H304a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8l87.68.07-92.76 131.79a16 16 0 0 0-2.92 9.21V472a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8h-87.81l92.89-131.86a16 16 0 0 0 2.92-9.21V296a8 8 0 0 0-8-8z"></path></svg>
                        </button>}
                    <strong>Name</strong>
                </div>
                <div className="col-4 text-center">
                    {popBool ? <button className="btn" onClick={sortByPopularity}>
                    <svg viewBox="0 0 448 512"><path fill="currentColor" d="M344.49 257.48a72 72 0 1 0 52.16 132c-8.84 31.22-35.92 54.86-69.08 58a8.07 8.07 0 0 0-7.57 7.92v16.07a8 8 0 0 0 8.38 8.05A112.15 112.15 0 0 0 432 367.86v-40a72.13 72.13 0 0 0-87.51-70.38zM360 367.86a40 40 0 1 1 40-40 40 40 0 0 1-40 40zM424 192h-40V48a16 16 0 0 0-16-16h-12a16 16 0 0 0-13.57 7.52l-20 32A16 16 0 0 0 336 96h16v96h-40a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zM198.93 371.56a11.93 11.93 0 0 0-16.91-.09l-54 52.67V40a8 8 0 0 0-8-8H104a8 8 0 0 0-8 8v383.92l-53.94-52.35a12 12 0 0 0-16.92 0l-5.64 5.66a12 12 0 0 0 0 17l84.06 82.3a11.94 11.94 0 0 0 16.87 0l84-82.32a12 12 0 0 0 .09-17z" ></path></svg>

                    </button> : <button className="btn" onClick={sortByPopularity}>
                    <svg viewBox="0 0 448 512"><path fill="currentColor" d="M424 192h-40V48a16 16 0 0 0-16-16h-12a16 16 0 0 0-13.57 7.52l-20 32A16 16 0 0 0 336 96h16v96h-40a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zm-79.51 65.48a72 72 0 1 0 52.16 132c-8.84 31.22-35.92 54.86-69.08 58a8.07 8.07 0 0 0-7.57 7.92v16.07a8 8 0 0 0 8.38 8.05A112.15 112.15 0 0 0 432 367.86v-40a72.13 72.13 0 0 0-87.51-70.38zM360 367.86a40 40 0 1 1 40-40 40 40 0 0 1-40 40zM120.44 35.51a11.94 11.94 0 0 0-16.87 0l-84 82.32a12 12 0 0 0-.09 17l5.61 5.68a11.93 11.93 0 0 0 16.91.09l54-52.74V472a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V88.08l53.94 52.35a12 12 0 0 0 16.92 0l5.64-5.66a12 12 0 0 0 0-17z"></path></svg></button>}
                    <strong>Popularity</strong></div>
            </div>

            {contactData.map((contact) => {
                return (
                    <ContactBox contact={contact} deleteContact={deleteContact} />
                )
            })}
        </div>
    )

}

export default ContactList