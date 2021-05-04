import './Table.css'

const Table = ({ pictureUrl, name, popularity, deleteOneContact }) => {
    return (
        <tr>
            <td><img src={pictureUrl}/></td>
            <td>{name}</td>
            <td>{popularity}</td>
            <td> <button onClick={deleteOneContact}>Eliminar contacto</button> </td>
        </tr>
    )
}


export default Table