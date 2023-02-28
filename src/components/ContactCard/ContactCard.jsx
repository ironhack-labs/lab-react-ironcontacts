import "./ContactCard.css"

const ContactCard = ({ name, pictureUrl, popularity, wonOscar, wonEmmy, _id }) => {

    const generatePrize = prize => {
        if (prize === true) {
            return <span>🏆</span>
        }
    }


    return (
        <tr>
            <th><img src={pictureUrl} alt="" /></th>
            <th>{name}</th>
            <th>{popularity}</th>
            <th>{wonOscar && '🏆'} </th>
            <th>{generatePrize(wonEmmy)}</th>



        </tr>
    )
}

export default ContactCard
