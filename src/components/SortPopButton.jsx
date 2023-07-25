const SortPopButton = (props) => {
    const {sortMethod} = props
    return (
      <div>
        <button onClick={() => sortMethod()}>Sort by popularity</button>
      </div>
    )
  }
  
  export default SortPopButton