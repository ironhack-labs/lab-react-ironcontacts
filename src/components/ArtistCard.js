import './ArtistCard.css'


const ArtistCard = ({ name, pictureUrl, popularity, deleteSelectedContact }) => {
    return (
        <section>
            <table>
                <ul>
                    <div className="artist-card">
                        <li> <img className="artist-card-img" src={pictureUrl}></img> </li>
                        <li>{name}</li>
                        <li>{popularity}</li>
                        <button onClick={deleteSelectedContact}>Delete</button>
                    </div>
                </ul>
            </table>
        </section>

    )
}

export default ArtistCard
