import './StarCard.css'

const StarCard = ({ name, pictureUrl, popularity, deleteContact}) => {


    return (

        <>
            <tr>
            <td><img src={pictureUrl}></img></td>
            <td>{name}</td>
            <td>{popularity}</td>
            <td><button onClick={deleteContact}>Eliminar ficha</button></td>
            </tr>
        </>

    )
}

export default StarCard



