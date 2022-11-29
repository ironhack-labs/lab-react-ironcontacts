import { useGlobalContext } from "../context";
export default function ActionButtons() {
  const { addRandomContact, sortByName, sortByPopularity } = useGlobalContext();

  return (
      <div className="action-buttons">
        <button onClick={addRandomContact}>Add Contact</button>
        <button onClick={sortByName}>Sort by Name</button>
        <button onClick={sortByPopularity}>Sort by Popularity</button>
      </div>
  );
}
