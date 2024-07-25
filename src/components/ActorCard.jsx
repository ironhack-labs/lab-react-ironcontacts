import "./ActorCard.css";


function ActorCard(props) {
    const { actor } = props
  return (
    <li className="actor-card">
        <h3 className="actor-name">{actor.name}</h3>
        <img src={actor.pictureUrl} alt="picture img" className="actor-img" />
        <p>{actor.popularity}</p>
        <p>{actor.wonEmmy ? '🎖️' : '' }</p>
        <p>{actor.wonOscar ? '🏆' : ''}</p>
   </li>
  )
}

export default ActorCard

