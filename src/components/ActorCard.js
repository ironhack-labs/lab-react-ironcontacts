export default function RenderActorRow(props){

    return <tr>
      <td><img src = {props.pictureUrl} alt="this pic" /></td>
      <td>{props.name}</td>
      <td>{props.popularity}</td>
    </tr>

  }