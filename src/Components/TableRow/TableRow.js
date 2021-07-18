import '../TableRow/TableRow.css'
import {ReactComponent as Delete} from "../../Data/svg/delete.svg"
function TableRow({pictureUrl, name, popularity, deleteActor,id}) {
    return (
        <tr  id = 'center'>
            <td><img id = 'img' src={pictureUrl}/></td>
            <td>{name}</td>
            <td>{popularity}</td>
            <td><button onClick={ () => {deleteActor(id)} }><Delete/></button></td>
        </tr>
    )
}

export default TableRow