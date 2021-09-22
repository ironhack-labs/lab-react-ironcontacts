import './ContactItems.css'

function ContacItems({name, picture, popularity, deletecont, id}) {

    return (
        <tr className='contact-item'>
            <td><img className='img' src={picture} alt={name}/></td> 
            <td><p>{name}</p></td> 
            <td><p>{popularity.toFixed(2)}</p></td> 
            <td><button onClick={() => deletecont(id) }>Delete</button></td>
        </tr>
    )
}

export default ContacItems