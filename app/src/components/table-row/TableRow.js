import 'bulma/css/bulma.css'

const Tr = ({ pic, remove, name, pop }) => {
    return (
        <tr>
            <th><img src={pic} width='100px' alt={name}></img> </th>
            <td>{name}</td>
            <td>{parseFloat(pop).toFixed(2)}</td>
            <td><button className='button is-danger is-small' onClick={remove}>Remove</button></td>
        </tr>
    )
}
export default Tr

