import 'bulma/css/bulma.css';
import './Table.css';

const Table = ({ pictureUrl, name, popularity, deleteContact }) => {

    return (

        <tr>
            <td > <img src={pictureUrl} /> </td>
            <td > {name} </td>
            <td > {popularity < 12 ? popularity + '⭐️' : (popularity > 12 && popularity < 16 ? popularity + '⭐️⭐️' : popularity + '⭐️⭐️⭐️')}</td>
            <td > <button className="button is-rounded my-class is-danger is-small" onClick={deleteContact}> Delete</button> </td>
        </tr>
    )
}

export default Table