function ContactList(props) {
  //console.log(props.contacts[0]);

  return (
    <>
      {props.contacts[0].map((elem) => {
        elem.popularity = parseFloat(elem.popularity).toFixed(2);
        //console.log("ELEM: ", elem);
        return (
          <tr key={elem.id}>
            <td>
              <img
                className="profilePicture"
                src={elem.pictureUrl}
                alt={`Profile of ${elem.name}`}
              />
            </td>
            <td>{elem.name}</td>
            <td>{elem.popularity}</td>
            {elem.wonOscar ? <td>🏆</td> : <td></td>}
            {elem.wonEmmy ? <td>🏆</td> : <td></td>}
          </tr>
        );
      })}
    </>
  );
}

export default ContactList;
