import './profile.css'
const Profile = ({ name, pictureUrl, popularity, id, deleteContact }) => {
    return (
        <article>
            <img src={pictureUrl}></img>
            <p>{name}</p>
            <p>{popularity}</p>
            <button onClick={deleteContact}>Delete Contact</button>
        </article>
    )
}

export default Profile