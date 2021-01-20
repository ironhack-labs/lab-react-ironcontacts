import React from 'react';

function DeleteBtn(props) {
    return (
      <button onClick={props.deleteContact}>Delete</button>
    )
}

function AddRandomContactBtn(props) {
    return (
      <button onClick={props.clickToAdd}>Add Random Concact</button>
    )
}
  
  function SortByNameBtn(props) {
    return (
      <button onClick={props.sortByName}>Sort by name</button>
    )
}
  
  function SortByPopularityBtn(props) {
    return (
      <button onClick={props.sortByPopularity}>Sort by popularity</button>
    )
}

export { DeleteBtn, AddRandomContactBtn, SortByPopularityBtn, SortByNameBtn} ;