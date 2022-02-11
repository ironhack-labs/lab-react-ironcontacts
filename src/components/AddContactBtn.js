function AddContactBtn(props) {
    const { currentArr, originalArr, addRandContact } = props;
    return (
      <div>
        {currentArr.length === originalArr
        ? <button disabled>Add Random Contact</button>
        : <button onClick={addRandContact}>Add Random Contact</button>}
      </div>
    );
}

export default AddContactBtn;