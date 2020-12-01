import './actor-card.css'

const ActorCard = ({ name, picture, popularity, deleteActor }) => {
    return (
        <tbody>
            <tr>
                <td><img src={picture} alt="Fotografía del actor" /></td>
                <td>{name}</td>
                <td>{popularity.toFixed(2)}</td>
                <td><button className='btn btn-dark deleteBtn' onClick={deleteActor}>Delete</button></td>
            </tr>
        </tbody>

    )

}

export default ActorCard