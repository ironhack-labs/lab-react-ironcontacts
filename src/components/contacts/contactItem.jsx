import Trophy from '../../assets/trophy-fill.svg';

function ContactItem({ pictureUrl, name, popularity, wonOscar, wonEmmy, onDelete}) {

  const hasOscar = () => wonOscar === true ? <img src={Trophy}/> : null;
  const hasEmmy = () => wonEmmy === true ? <img src={Trophy}/> : null;

 return (
    <tr>
      <th scope="row">#</th>
      <td><img width='50' src={pictureUrl} alt="" /></td>
      <td>{name}</td>
      <td>{popularity}</td>
      <td>{hasOscar()}</td>
      <td>{hasEmmy()}</td>
      <td>
        <button className="btn btn-danger" onClick={onDelete}>
          Delete
        </button>
      </td>
    </tr>
 )
}

export default ContactItem;