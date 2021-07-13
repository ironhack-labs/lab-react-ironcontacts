const Contact = ({ name, pictureUrl, popularity }) => {



    return (

        <tr>
            <td><img src={pictureUrl} className="picture" /></td>
            <td>{name}</td>
            <td>{popularity}</td>
        </tr>

    )

}
export default Contact