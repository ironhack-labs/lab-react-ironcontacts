import './App.css'
import { useState } from 'react'
import contacts from "./contacts.json"


function App() {

  const topfive = contacts.slice(0, 5)
  let rest = contacts.slice(5)
  const [selectCelebrity, setselectCelebrity] = useState(topfive)

  const randomCelebrity = () => {
    const randomIndex = Math.floor(Math.random() * rest.length)
    const randomContact = rest[randomIndex]

    setselectCelebrity([randomContact, ...selectCelebrity])
  }

  return (
    <div className="App">

      <button onClick={randomCelebrity}>Add Random Contact</button>

      <section>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th>
              <th>Won Emmy</th>
            </tr>
          </thead>
          <tbody>
            {selectCelebrity.map((item, index) => {
              return <tr key={index}>
                <td><img src={item.pictureUrl} alt="" className='ImageTopfive' /></td>
                <td>{item.name}</td>
                <td>{item.popularity.toFixed(2)}</td>
                <td>{item.wonOscar && '🏆'} </td>
                <td>{item.wonEmmy && '💩'} </td>
              </tr>
            })
            }

          </tbody>
        </table>
      </section>

    </div>
  );
}

export default App;
