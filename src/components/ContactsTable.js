function ContactsTable(props) {
    const { list, deleteUpdate } = props;

    return (
      <div>
        <table className="Table">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {list.map((cont) => (
              <tr key={cont.id}>
                <td>
                  <img alt={cont.name} src={cont.pictureUrl} />
                </td>
                <td>{cont.name}</td>
                <td>{cont.popularity.toFixed(2)}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteUpdate(cont.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default ContactsTable;