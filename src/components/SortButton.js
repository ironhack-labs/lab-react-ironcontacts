const SortButton = (props) => {
  return (
    <div>
    <button onClick ={props.handleSort}>{props.name}</button>
    </div>
  )
} 

export default SortButton;