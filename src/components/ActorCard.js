export default function RenderActorRow(props){

    const{
      handleDelete,
      actor: {
          pictureUrl,
          name,
          popularity,
          id
      }
  } = props

    return <tr>
      <td><img src = {pictureUrl} alt="this pic" /></td>
      <td>{name}</td>
      <td>{popularity}</td>
      <td>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </td>
    </tr>

  }