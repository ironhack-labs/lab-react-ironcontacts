import './RowTable.css'

const RowTable = props => {

    return (

        <tr>
            <td>
                <figure>
                    <img src={props.image} alt={`${props.name} contact"`} />
                </figure>

            </td>

            <td>{props.name}</td>

            <td>{props.popularity.toFixed(2)}</td>
            <td><button className="button is-rounded is-danger "  onClick={props.delete}>Delete</button></td>
        </tr>
    
)
    
}

export default RowTable