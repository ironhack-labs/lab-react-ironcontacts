
function ContactCard({name,pictureUrl,popularity,id,wonOscar,wonEmmy})
{

    return(

        <div className="tablecontent">
      
      <h3>{name}</h3>
      <img src = {pictureUrl} alt = "profileimg" className={"profilepicturee"}/>
   <h3>popularity</h3>
   <h3>id</h3>
   <h3>wonOscar</h3>
   <h3>wonEmmy</h3>

        </div>
    )
}

export default ContactCard;