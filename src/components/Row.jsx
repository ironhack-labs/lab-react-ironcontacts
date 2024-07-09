function Row ({contact}) {
    return (
        <tr key={contact.id}>
        <td><img src={contact.pictureUrl} alt={contact.name} width="150" /></td>
        <td>{contact.name}</td>
        <td>{contact.popularity}</td>
        <td>{contact.wonOscar ? "🏆" : ""}</td>
        <td>{contact.wonEmmy && "🌟"}</td>
      </tr>
    )
}

export  default Row;