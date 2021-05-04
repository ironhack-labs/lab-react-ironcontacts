import './CelebrityInfo.css'

const CelebrityInfo = ({ name, image, popularity, deleteContact }) => {
    return (
        <tr className="celebrity-card">
            <td scope="row">
                <div className="img-container">
                <img src={image} alt={name}></img>
                </div>
            </td>
            <td>
                <h4>{name}</h4>
            </td>
            <td>
                <p> {popularity.toFixed(2)}</p>
            </td>
            <td>
                <button onClick = {deleteContact} className="delete-btn">Delete</button>
            </td>
        </tr>
    )
}

export default CelebrityInfo