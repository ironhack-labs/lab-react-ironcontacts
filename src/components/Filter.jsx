import React from 'react';

const Filter = (props) => {
  const sortByNameHandler = (event) => {
    props.onSelectSortFunction(event.target.value);
  };
  const sortByPopHandler = (event) => {
    props.onSelectSortFunction(event.target.value);
  };
  return (
    <div>
      <button value='name' onClick={sortByNameHandler}>
        Sort By Name
      </button>
      <button value='pop' onClick={sortByPopHandler}>
        Sort by Popularity
      </button>
    </div>
  );
};

export default Filter;
