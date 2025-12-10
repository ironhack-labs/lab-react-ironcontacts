function ActionButtons({ onAddRandom, onSortByName, onSortByPopularity }) {
  return (
    <div className="action-buttons">
      <button onClick={onAddRandom}>Add Random Contact</button>
      <button onClick={onSortByName}>Sort by Name</button>
      <button onClick={onSortByPopularity}>Sort by Popularity</button>
    </div>
  );
}

export default ActionButtons;
