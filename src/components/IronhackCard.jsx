export default function IronhackCard({ id, name, pictureUrl, popularity, wonOscar, wonEmmy}) {

  return (
    <div key={id} className="IronhackCard">
      <h3>{id}</h3>
      <p>Name: {name}</p>
      <p>Popularity: {popularity}</p>
      <p>Won Oscar: {wonOscar}</p>
      <p>Won Emmy: {wonEmmy}</p>
    </div>
  );
}

// pictureUrl, popularity, wonOscar, wonEmmy