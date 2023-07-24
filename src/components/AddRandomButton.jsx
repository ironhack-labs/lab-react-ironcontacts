const AddRandomButton = (props) => {
  const {newContact} = props
  return (
    <button onClick={() => newContact()} className="AddRandomButton">
      Add Random Contact
    </button>
  )
}

export default AddRandomButton