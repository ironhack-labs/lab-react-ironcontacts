import { useGlobalContext } from "../context";

export default function Contacts() {
// All actions are in ../context.js
  const { contacts, removeContact } = useGlobalContext();

  return (
    <table className="contacts-table">
      <thead className="contacts-table-head">
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
      </thead>
      <tbody className="contacts-table-body">
        {contacts.map(
          ({ id, name, pictureUrl, popularity, wonOscar, wonEmmy }) => (
            <tr key={id} className="contacts-row">
              <td>
                <img src={pictureUrl} alt={name} />
              </td>
              <td>
                <span>{name}</span>
              </td>
              <td>
                <span>{popularity.toFixed(2)}</span>
              </td>
              <td>
                <span>{wonOscar && "🏆"}</span>
              </td>
              <td>
                <span>{wonEmmy && "🏆"}</span>
              </td>
              <td className="cell-btn">
                <button onClick={() => removeContact(id)} className="btn-remove">🗑️</button>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}
