import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";
const contactsArray = contacts.slice(0, 5);

function App() {
  let [actors, setActors] = useState(contactsArray);
  function addContact() {
    const newActor = contacts.filter(
      (a) => !actors.map((e) => e.id).includes(a.id)
    );
    const index = Math.floor(Math.random() * newActor.length);
    console.log(newActor, index, newActor[index]);
    setActors([...actors, newActor[index]]);
  }

  function alpha() {
    return setActors([...actors.sort((a, b) => a.name.localeCompare(b.name))]);
  }

  function popula() {
    return setActors([...actors.sort((a, b) => b.popularity - a.popularity)]);
  }
  return (
    <div>
      <div class="flex w-full justify-around">
        <button
          class="bg-blue-900 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
          onClick={() => addContact()}>
          Add Random Contact
        </button>
        <button
          class="bg-blue-900 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
          onClick={() => alpha()}>
          Ordenar por nombre
        </button>
        <button
          class="bg-blue-900 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
          onClick={() => popula()}>
          Ordenar por popularidad
        </button>
      </div>
      <div class="md:px-32 py-8 w-full">
        <div class="shadow overflow-hidden rounded border-b border-gray-200">
          <table class="min-w-full bg-white">
            <thead class="bg-gray-800 text-white">
              <tr>
                <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Picture
                </th>
                <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Name
                </th>
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Popularity
                </th>
              </tr>
            </thead>
            <tbody class="text-gray-700">
              {actors.map((e, id) => {
                return (
                  <tr key={id}>
                    <td class="w-1/3 text-left py-3 px-4">
                      <img width="100px" src={e.pictureUrl} alt={e.name} />
                    </td>
                    <td class="text-left py-3 px-4">{e.name}</td>
                    <td class="text-left py-3 px-4">{e.popularity}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
