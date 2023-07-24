const SortNameButton = (props) => {
  const {sortMethod} = props
  return (
    <div>
      <button onClick={() => sortMethod()} className="SortNameButton">Sort by name</button>
    </div>
  )
}

export default SortNameButton