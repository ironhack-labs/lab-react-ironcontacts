function ContactItem({ name, pictureUrl, popularity, wonOscar, wonEmmy, onDelete }){

const roundedPopularity = Number(popularity).toFixed(2);
const haveAnOscar = () => {
    if (wonOscar === true) {
        return <i className="bi bi-trophy"></i>
    }
};

const haveAnEmmy = () => {
    if (wonEmmy === true) {
        return <i className="bi bi-trophy"></i>
    }
};

    return (
        <tr className="text-center">
            <td><img src={pictureUrl} alt={name} width={85} /></td>
            <td className="align-middle">{name}</td>
            <td className="align-middle">{roundedPopularity}</td>
            <td className="align-middle">{haveAnOscar()}</td>
            <td className="align-middle">{haveAnEmmy()}</td>
            <td className="align-middle">
                <button className='delete-btn' onClick={onDelete}><i className="bi bi-trash"></i></button>
            </td>
        </tr>
    )
}

export default ContactItem