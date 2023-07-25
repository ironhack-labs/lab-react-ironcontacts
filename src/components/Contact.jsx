const Contact = (props) => {
    const { contactInfo } = props
  
    return contactInfo.map((contact) => {
      const { pictureUrl, name, popularity , wonOscar, wonEmmy} = contact
  
      return (
        <tr className="Contact">
          <td>
            <img src={pictureUrl} alt="profile-img" />
          </td>
          <td>{name}</td>
          <td>{Number(popularity).toFixed(2)}</td>
          <td>{wonOscar ? "🏆": ""} </td>
          <td>{wonEmmy ? "🏆": ""} </td>
        </tr>
      )
    })
  }
  
  export default Contact