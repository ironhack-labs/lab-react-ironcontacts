
function Contact(props){
    return(
      <div>
      <span className="name">{props.name}</span> 
      <span className="pictureurl">{props.pictureUrl}</span>
      <span className="popularity">{props.popularity}</span>
      <span className="id">{props.id}</span>
      <span className="wonemmy">{props.wonEmmy}</span>
      </div>
    )
}

export default Contact;