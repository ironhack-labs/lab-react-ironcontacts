import './ContactList.css'


const ContactsItem = ({ pictureUrl, name, popularity, wonOscar, wonEmmy, onDelete}) => {

    // los booleanos para que se haga una cosa u otra (helpers)
    const isWonOscar = () => {
        if (wonOscar === true) {
            return '🏆'
        }else {
            return ''
        }
    };

    const isWonEmmy = () => {
        if (wonEmmy === true) {
            return '🏆'
        } else {
            return ''
        }
    }

    return (
        <tr className='trContact'>
        <th scope="row"> <img className='imageContact' src= {pictureUrl} ></img> </th>
        <td className='nameContact'>{ name }</td>
        <td className='popularityContac'>{ popularity.toFixed(2) }</td>
        <td className='wonContact'>{ isWonOscar () }</td>
        <td className='wonContact'>{ isWonEmmy() }</td>
        <td className='btnDel'>
        <button type="button" className="btn btn-outline-dark" onClick={onDelete}>Delete</button>
         </td>
      </tr>
    )
}

export default ContactsItem;