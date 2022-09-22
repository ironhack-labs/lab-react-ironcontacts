import './TableRow.css'

function TableRow({ pictureUrl, name, popularity, wonOscar, wonEmmy, onDelete }) {
    return (
        <tr className="TableRow">
            <td><img src={pictureUrl} alt="" width="50%"/></td>
            <td>{name}</td>
            <td>{(popularity).toFixed(2)}</td>
            <td>{wonOscar ? '🏆' : '💩'}</td>
            <td>{wonEmmy ? '🏆' : '💩'}</td>
            <td><button onClick={onDelete}>Delete</button></td>
        </tr>
    )
}

export default TableRow