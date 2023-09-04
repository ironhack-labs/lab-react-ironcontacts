function ContactItem({ name, pictureUrl, popularity, wonOscar, wonEmmy }){

const roundedPopularity = Number(popularity).toFixed(2);
const haveAnOscar = () => {
    if (wonOscar === true) {
        return 'yes'
    }
};

const haveAnEmmy = () => {
    if (wonEmmy === true) {
        return 'yes'
    }
};

    return (
        <tr>
            <td><img src={pictureUrl} alt={name} width={85} /></td>
            <td>{name}</td>
            <td>{roundedPopularity}</td>
            <td>{haveAnOscar()}</td>
            <td>{haveAnEmmy()}</td>
        </tr>
    )
}

export default ContactItem