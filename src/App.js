import './App.css';
import contacts from "./contacts.json";

function App() {

  function wonOscar(contact) {
    if (contact.wonOscar) {
      return "🏆";
    } else {
      return "";
    }
  };

  function wonEmmy(contact) {
    if (contact.wonEmmy) {
      return "🏆";
    } else {
      return "";
    }
  };

  console.log(wonOscar(contacts[0]))

  return (
    <div className="App bg-gradient-to-bl from-blue-700 via-blue-800 to-gray-900 text-white overflow-x-hidden font-[Poppins]">
      <div className="w-screen flex items-center flex-col mb-10">
        <img src="../images/man_user.png" alt="User" className="w-1/6" />
        <h1 className="font-bold text-5xl w-1/5 border-b-4 py-3 hover:border-8 hover:py-4 hover:rounded-full hover:border-white hover:shadow-indigo-300 hover:shadow-lg hover:cursor-pointer hover:bg-slate-400 hover:bg-opacity-10 transition ease-in-out hover:scale-110">IronContacts</h1>
      </div>

      <div className="flex justify-center">
        <table className="w-2/4 text-sm text-gray-500 text-center">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                Picture
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Popularity
              </th>
              <th scope="col" className="px-6 py-3">
                Won Oscar
              </th>
              <th scope="col" className="px-6 py-3">
                Won Emmy
              </th>
            </tr>
          </thead>
          <tbody>
            {contacts.slice(0, 5).map((contact) =>
              <tr key={contact.id} className="bg-gray-800 hover:bg-gray-600">
                <th scope="row" className="flex items-center justify-center px-6 py-4 text-gray-900 whitespace-nowrap">
                  <img className="w-20 h-30 rounded-lg" src={contact.pictureUrl} alt={`${contact.name}`} />
                </th>
                <td className="px-6 py-4 font-medium text-white text-xl">
                  {contact.name}
                </td>
                <td className="px-6 py-4 font-medium text-base">
                  {contact.popularity.toFixed(2)}
                </td>
                <td className="px-6 py-4 font-medium text-3xl">
                  {wonOscar(contact)}
                </td>
                <td className="px-6 py-4 font-medium text-3xl">
                  {wonEmmy(contact)}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default App;
