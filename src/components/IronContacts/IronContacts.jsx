import './IronContacts.css'
import trophy from '../../assets/images/trophy.png'
import wreath from '../../assets/images/wreath.png'

const IronContacts = ({name,pictureUrl,popularity,wonOscar,wonEmmy,onDelete,...props}) => {
    return(
            <tr>
                <td><img src={pictureUrl} alt="contact"></img></td>
                <td>{name}</td>
                <td>{popularity}</td>
                <td>{wonOscar?<img src={trophy} alt="trophy" />:''}</td>
                <td>{wonEmmy?<img src={wreath} alt="trophy" />:''}</td>
                <td><button onClick={onDelete}>Delete</button></td>
            </tr>
    );
};

export default IronContacts;