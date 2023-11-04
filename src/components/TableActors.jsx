import ActorsListTile from "./ActorsListTile";

function TableActors(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
      </thead>
      <tbody>
        {props.contactsToDisplay.map((contact) => {
          return (
            <ActorsListTile
              key={contact.id}
              contact={contact}
              deleteContactById={props.deleteContactById}
            ></ActorsListTile>
          );
        })}
      </tbody>
    </table>
  );
}

export default TableActors;
