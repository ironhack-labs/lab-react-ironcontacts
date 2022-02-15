import contact from '../../../contacts.json'
import './contact-item.css'


function ContactItem({ name, pictureUrl, popularity, id }) {

    return (
        <div className='d-flex'>
            <div className='d-flex row g-2 row-cols-1 row-cols-md-3 mb-5 '>
                <div>
                    <img className='' style={{ maxWidth: '120px' }} src={pictureUrl} alt={name} />
                </div>
                    <h2>{name}</h2>
                    <h2>{popularity}</h2>
            </div>
        </div>
    )
}



export default ContactItem