const Contact = props => {
    return (
        <tr className={props.className}>
            <td><img src={props.children.pictureUrl} alt={props.children.name}/></td>
            <td>{props.children.name}</td>
            <td>{Math.round(props.children.popularity * 100) / 100}</td>
        </tr>
    )
}

export default Contact;