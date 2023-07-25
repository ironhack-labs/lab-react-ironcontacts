const Contact = (props) => {
    const { contactInfo } = props
  
    return contactInfo.map((contact) => {
      const { pictureUrl, name, popularity } = contact
  
      return (
        <tr className="Contact">
          <td>
            <img src={pictureUrl} alt="profile-img" />
          </td>
          <td>{name}</td>
          <td>{Number(popularity).toFixed(2)}</td>
        </tr>
      )
    })
  }
  
  export default Contact