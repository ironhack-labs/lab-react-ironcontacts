
import "./Contact.css"
const Contact = ({ contacts }) => {

    return (

        contacts.map(elm => {
            return (<tr key={elm.id}>
                <td><img src={elm.pictureUrl} alt="" /></td>
                <td>{elm.name}</td>
                <td>{elm.popularity}</td>
                {elm.wonOscar ? <td>🏆</td> : <td></td>}
                {elm.wonEmmy ? <td>🏆</td> : <td></td>}
            </tr>)
        })
    )
}

export default Contact