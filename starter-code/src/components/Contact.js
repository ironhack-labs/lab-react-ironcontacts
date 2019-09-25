import React from "react";

export default function Contact({data, deletee}) {
  return (
    <tr>
      <td>
        <img src={data.pictureUrl} alt={data.name} width="100" />
      </td>
      <td>
        <p>{data.name}</p>
      </td>
      <td>
        <p>{data.popularity}</p>
      </td>
      <td>
        <button className="button is-danger" onClick={() => deletee(data.popularity)}>Borrar</button>
      </td>
    </tr>
  );
}
