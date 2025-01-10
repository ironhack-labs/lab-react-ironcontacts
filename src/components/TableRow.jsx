function TableRow({contact, deleteFromContacts}){

    function deleteRow(event){
        deleteFromContacts(contact.id);
    }

    return (
        <tr key={contact.id}>
            <td><img width="100px" src={contact.pictureUrl} alt="pic of contact"/></td>
            <td>{contact.name}</td>
            <td>{(contact.popularity).toFixed(2)}</td>
            <td>{contact.wonOscar?"🏆":""}</td>
            <td>{contact.wonEmmy?"🌟":""}</td>
            <td><button onClick={deleteRow}>Delete</button></td>
        </tr>
    );
}
export default TableRow