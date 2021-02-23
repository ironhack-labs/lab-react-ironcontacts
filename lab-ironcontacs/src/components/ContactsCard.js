import './../components/ContactsCard.css'

const ContactCard = ({pictureUrl,name,popularity,deleteContact})=>{
    return(
<>
<table className="table-contacts">
<thead>
    <td className="table-title"></td>
    <td className="table-title">Name</td>
    <td className="table-title">Popularity</td>
</thead>
<tbody>
    <td><img src={pictureUrl}/></td>
    <td>{name}</td>
    <td>{popularity}⭐️</td>
    <td><button onClick={deleteContact}>Delete contact</button></td>

</tbody>
</table>
</>
)
}
export default ContactCard