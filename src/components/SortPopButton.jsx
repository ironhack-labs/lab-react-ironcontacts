const SortPopButton = (props) => {
  const {sortMethod} = props
  return (
    <div>
      <button onClick={() => sortMethod()} className="SortPopButton">Sort by popularity</button>
    </div>
  )
}

export default SortPopButton
