const IronContacts = (props) => {
  const { pictureUrl, name, popularity, wonOscar, wonEmmy } = props.eachContact;
  return (
    <tbody>
      <tr>
        <td>{<img src={pictureUrl}></img>}</td>
        <td>{name}</td>
        <td>{popularity}</td>
        <td>{wonOscar === false ? '' : <span>🏆</span>}</td>
        <td>{wonEmmy === false ? '' : <span>🏆</span>}</td>
      </tr>
    </tbody>
  );
};
export default IronContacts;
