import './ContactItem.css'

function ContactItem({ id, name, pictureUrl, popularity, onClickDelete }) {
  return (
    <div className=" ContactItem d-flex flex-row" >
      <li className="list-group-item"><img src={pictureUrl}/></li>
      <li className="list-group-item"><h5>{name}</h5></li>
      <li className="list-group-item">{popularity.toFixed(2)}</li>
      <li className="list-group-item">
          <button type="button" className="btn btn-danger" onClick={() => onClickDelete(id)}> Delete</button>
    </li>
    </div>
  );
}

ContactItem.defaultProps = {
    onClickDelete: () => {}
}

export default ContactItem;
