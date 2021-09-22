const displayAll = ({ pictureUrl, name, popularity, deleteContact, id }) => {



    return (

        <tr>
            <td><img src={pictureUrl} alt="foto del actor" /></td>
            <th>{name}</th>
            <td>{popularity.toFixed(2)}</td>
            <td><button onClick={() => deleteContact(id)}>Eliminar</button></td>
        </tr>
    )


}

export default displayAll