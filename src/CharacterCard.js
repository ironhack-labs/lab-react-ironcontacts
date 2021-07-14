import './CharacterCard.css'

const CharacterCard = ({ characterName, characterPopularity, characterImage }) => { //desestructurar en la entrada, practica en la industria.
    
    return (
        <>
            <>

                <article className="character-card">
                    <img src={characterImage}></img>
                    <h1>{characterName}</h1>
                    <p>{characterPopularity}</p>
                </article>
            </>
        </>
    )
}
export default CharacterCard