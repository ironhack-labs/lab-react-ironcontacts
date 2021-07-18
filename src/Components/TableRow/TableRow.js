import '../TableRow/TableRow.css'

function TableRow({pictureUrl, name, popularity, deleteActor,id}) {
    return (
        <tr>
            <td><img id = 'img' src={pictureUrl}/></td>
            <td>{name}</td>
            <td>{popularity}</td>
            <td><button onClick={ () => {deleteActor(id)} }>Delete</button></td>
        </tr>
    )
}

export default TableRow