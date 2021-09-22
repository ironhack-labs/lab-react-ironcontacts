export default function ContactList (props) {
    const {contacts, handleDelete} = props;

    return (
        <table className="table">
            <thead>
            <tr>
                <td>Picture</td>
                <td>Name</td>
                <td>Popularity</td>
                <td>Won Oscar</td>
                <td>Won Emmy</td>   
                <td>Actions</td>   
            </tr>
            </thead>
            <tbody>
            {
                props.contacts.map(contact => {
                    return (
                    <tr key={contact.id}>
                        <td> <img src={contact.pictureUrl} alt={contact.name} /> </td>
                        <td>{contact.name}</td>
                        <td>{Math.round(contact.popularity * 100) / 100}</td>
                        {contact.wonOscar ? <td>🏆</td> : <td></td>}
                        {contact.wonEmmy ? <td>🏆</td> : <td></td>}
                        <button onClick={() => handleDelete(contact.id)} className="btn-add">
                             Delete
                         </button>
                    </tr>
                    )
                })
            }

            </tbody>
      </table>
    )
}