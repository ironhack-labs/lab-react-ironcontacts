import './ContactItem.css'

function ContactItem({ id, name, pictureUrl, popularity, onClickDelete }) {
  return (
    <tr className="ContactItem">
      <td><img src={pictureUrl} alt={name}/></td>
      <td><h5>{name}</h5></td>
      <td>{popularity.toFixed(2)}</td>
      <td><button type="button" className="btn btn-danger" onClick={() => onClickDelete(id)}> Delete</button></td>
    </tr>
  );
}

ContactItem.defaultProps = {
    onClickDelete: () => {}
}

export default ContactItem;
