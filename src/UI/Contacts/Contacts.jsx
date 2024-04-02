import ButtonDelete from "../ButtonDelete/ButtonDelete"


function Contacts({ name, pictureUrl, popularity, wonOscar, wonEmmy, id, listContacts, setListContacts,setNumActors }) {
 

    return (
      <>
  
        <tr>
          <td><img src={pictureUrl} alt="" /></td>
          <td>{name}</td>
          <td>{popularity.toFixed(2)}</td>
          <td>{wonEmmy && <i className="fa fa-trophy"> </i>}</td>
          <td>{wonOscar && <i className="fa fa-trophy"></i>}</td>
          <td><ButtonDelete listContacts={listContacts} setListContacts={setListContacts} setNumActors={setNumActors} id={id} ></ButtonDelete></td>
        </tr>
  
      </>
    )
   
  }
  export default Contacts