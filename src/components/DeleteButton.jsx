const DeleteButton = (props) => {
    const { id, deleteContact } = props
    return <button onClick={()=> deleteContact(id)}>Delete</button>
  }
  
  export default DeleteButton