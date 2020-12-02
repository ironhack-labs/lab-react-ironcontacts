import './Row.css'

const Row = ({ id, pictureUrl, name, popularity, deleteActor }) => {
    
    return (
            <tr key={id}  className="row-card">
                <td><img src={pictureUrl} alt={name}/></td>
                <td><p><strong>{name}</strong></p></td>
                <td><p>{popularity}</p></td>
                <td><button className="row-button" onClick={deleteActor}>Eliminar</button></td>
            </tr>  
    )
}

export default Row