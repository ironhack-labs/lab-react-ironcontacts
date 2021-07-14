import Rows from './Rows.js'

const Table = ({ contacts, deleteRegister }) => {

    return (

        <table border='1' style={{ width: '40%', textAlign: 'center' }}>
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>

                {
                    contacts.map((contact, i) => {
                        return (
                            <tr key={contact.id}>
                                <Rows contact={contact} deleteRegister={() => deleteRegister(contact.id)} />
                            </tr>
                        )
                    })
                }
            </tbody>

        </table>
    )
}

export default Table