const DeleteButton = (props) => {
  const { id, deleteContact } = props
  return <button onClick={()=> deleteContact(id)} className="DeleteButton">Delete</button>
}

export default DeleteButton