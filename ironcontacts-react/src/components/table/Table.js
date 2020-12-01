import './Table.css'

export const TableHead = ({ head1, head2, head3, head4 }) => {
    return (
        <thead>
            <tr className="row">
                <th>{head1}</th>
                <th>{head2}</th>
                <th>{head3}</th>
                <th>{head4}</th>
            </tr>
        </thead>
    )
}

export const TableRow = ({pictureUrl, name, popularity, deleteContact}) => {
    return (
        <tr className="row">
            <td><img src={pictureUrl} alt={name} /></td>
            <td>{name}</td>
            <td>{popularity.toFixed(2)}</td>
            <td><button onClick={deleteContact}>Delete</button></td>
        </tr>
    )
}

