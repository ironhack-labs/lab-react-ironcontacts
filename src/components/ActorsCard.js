import './ActorsCard.css'

const Card = ({ name, pictureUrl, popularity, id, deleteById }) => {
    const formattedPop = popularity.toFixed(2)
    const altX = '' + name + '.jpg'
    return (
        <article className="actor-card">
            <div>
                <img src={pictureUrl} alt={altX}></img>
            </div>
            <div>
                <h3>Contact Name: </h3>
                <p>{name}</p>
            </div>
            <div>
                <h3>Popularity rate: </h3>
                <p><strong>{formattedPop}</strong></p>
            </div>
            <button onClick={deleteById}> cancella</button>

        </article>
    )

}










export default Card