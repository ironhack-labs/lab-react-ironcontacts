import RowTable from './RowTable'


const ContactsTable = props => {



    return (

        <div className="container">
            <div className="columns">
                <div className="column is-half is-offset-one-quarter">

                    <table className="table is-striped is-fullwidth">

                        <thead>
                            <tr>
                                <th>Picture</th>
                                <th>Name</th>
                                <th>Popularity</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody>

                            {props.info.map(elm => <RowTable key={elm.id} image={elm.pictureUrl} name={elm.name} popularity={elm.popularity} delete={() => props.removeContact(elm.id)} />)}

                        </tbody>

                    </table>
                </div>
            </div>
        </div>

    )
}

export default ContactsTable
