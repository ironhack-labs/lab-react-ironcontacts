const AddRandomButton = (props) => {
    const {newContact} = props
    return (
      <div className="AddRandomButton">
        <button onClick={() => newContact()}>Add Random Contact</button>
      </div>
    )
  }
  
  export default AddRandomButton