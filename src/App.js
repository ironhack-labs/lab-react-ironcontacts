import './App.css';
import contacts from './contacts.json'
import {useState} from 'react'


function App() {
  //----------1----------//
  //        HOOKS
  //----------1----------//
  const [newProfile,setNewProfile] = useState({
    pictureUrl : "",
    name : "",
    popularity : 0
  })
  

  const [profiles,setProfiles] = useState([
    {
      "name": "Idris Elba",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
      "popularity": 11.622713,
      "id": "11731993-0604-4bee-80d5-67ad845d0a38"
    },
    {
      "name": "Johnny Depp",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
      "popularity": 15.656534,
      "id": "7dad00f7-3949-477d-a7e2-1467fd2cfc06"
    },
    {
      "name": "Monica Bellucci",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/qlT4904d8oi2NIs28RrgnIZDFZB.jpg",
      "popularity": 16.096436,
      "id": "0ad5e441-3084-47a1-9e9b-b917539bba71"
    },
    {
      "name": "Gal Gadot",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/34kHAyBaBhq2kUrmhM15paEBuuI.jpg",
      "popularity": 10.049256,
      "id": "b497e3c4-50bb-4ae2-912f-eb36802c5bc2"
    },
    {
      "name": "Ian McKellen",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/coWjgMEYJjk2OrNddlXCBm8EIr3.jpg",
      "popularity": 10.070132,
      "id": "0067ae32-97b6-4431-898e-eb1c10150abb"
    }
  ])

  
  //----------2----------//
  //         CRUD
  //----------2----------//


  //ADD PROFILE
  const addRandomProfile = () => {
    let  randomIndex = Math.floor(Math.random() * (contacts.length - 0) + 0)
    setProfiles([...profiles, contacts[randomIndex]])
  }

  //DELETE PROFILE
  const deleteProfile = (id) => {
    const arrFiltered = profiles.filter((item) => {
      return id != item.id
    })

    setProfiles(arrFiltered)
  }


  //SORT PROFILES

  //BY NAME
  const sortByName = () => {
    profiles.sort(function (a,b) {
      if (a.name < b.name){
        return -1
      } else if (a.name > b.name) {
        return 1
      }else{
        return 0
      }
      

    })

    setProfiles([...profiles])
  }
  const sortByPop = () => {
    profiles.sort(function (a,b) {
      if (a.popularity > b.popularity){
        return -1
      } else if (a.popularity < b.popularity) {
        return 1
      }else{
        return 0
      }
      

    })

    setProfiles([...profiles])
  }


  return (
    <>
      <div className="md:container md:mx-auto">
        <h1 className="text-5xl p-5 font-bold">IronContacts</h1>
        <div className="flex flex-row">
          <button onClick={() => addRandomProfile()} className="w-1/3 space-y-2 flex items-center justify-center rounded-md border border-gray-300 shadow-2xl">Add Random </button>
          <button onClick={() => sortByName()} className="w-1/3 space-y-2 flex items-center justify-center rounded-md border border-gray-300 shadow-2xl">Sort by Name</button>
          <button onClick={() => sortByPop()} className="w-1/3 space-y-2 flex items-center justify-center rounded-md border border-gray-300 shadow-2xl">Sort by Popularity </button>
        </div>

        <table class="table-auto shadow-2xl">

          <tr>
            <th className="text-2xl p-5 font-bold w-1/4 bg-blue-200 border-2 border-blue-600">Picture</th>
            <th className="text-2xl p-5 font-bold w-1/4 bg-blue-200 border-2 border-blue-600">Name</th>
            <th className="text-2xl p-5 font-bold w-1/4 bg-blue-200 border-2 border-blue-600">Popularity</th>
            <th className="text-2xl p-5 font-bold w-1/2 bg-blue-200 border-2 border-blue-600"></th>
          </tr>
          
          {profiles.length === 0 ? (
            <h3>Do you wanna add more contacts?</h3>
          ) : (
            profiles.map((elem) => {
              return (
                <tr>
                  <img src={elem.pictureUrl}  className="flex flex-column flex-wrap content-center object-cover md:w-28 p-2 "/>
                  <td className="text-xl p-5 font-medium border-2 border-blue-600">{elem.name}</td>
                  <td className="text-xl p-5 font-medium border-2 border-blue-600">{elem.popularity.toFixed(2)}</td>
                  <td className="text-xl p-5 font-medium border-2 border-blue-600"><button onClick={() => deleteProfile(elem.id)} className="w-1/2 flex items-center justify-center rounded-md border border-gray-300 ring-4 ring-indigo-300">Delete</button></td>
                </tr>
              )
            })
          )}
        </table>

        
      </div>
    </>
  )
}

export default App;
