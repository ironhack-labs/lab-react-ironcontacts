const ContactCard = ({ pictureUrl, name, popularity }) => {


    return (
        <div className="contact-card">   
            <tr>
                    <td>
                        <img src={pictureUrl} alt={name} />
                    </td>
                    <td>
                        <p>{name}</p>
                    </td>
                    <td>
                        <p>{popularity}</p>
                    </td>    
            </tr>    
            
                       
        </div>
    )
}

export default ContactCard