import { useState } from 'react'
import './App.css'
import allContacto from './contacts.json'

function App() {
  const [contactos, setContactos] = useState(allContacto.slice(0, 5))

  const handleConactRandom = () => {
    const idRandom = Math.floor(Math.random() * allContacto.length)
    const randomContacto = allContacto[idRandom]

    if (!contactos.includes(randomContacto)) {
      const clone = [...contactos, randomContacto]
      setContactos(clone)
    }
  }
  const handleSortName = () => {
    const clone = [...contactos].sort((a, b) => {
      return a.name.localeCompare(b.name)
    })
    setContactos(clone)
  }
  const handleSortPopularity = () => {
    const clone = [...contactos].sort((a, b) => {
      return a.popularity - b.popularity
    })
    setContactos(clone)
  }
  const handleDelete = (contactoName) => {
    const clone = [...contactos].filter((cadacontacto) => {
      return cadacontacto.name !== contactoName
    })
    setContactos(clone)
  }
  return (
    <div className="App">
      <h1 style={{ color: '#333', textAlign: 'center', marginBottom: '20px' }}>
        LAB | React IronContacts
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '20px',
        }}
      >
        <button
          onClick={handleConactRandom}
          style={{
            backgroundColor: '#d3c253',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
          }}
        >
          Add Random Contact
        </button>
        <button
          onClick={handleSortPopularity}
          style={{
            backgroundColor: '#d3c253',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
          }}
        >
          Sort By Popularity
        </button>
        <button
          onClick={handleSortName}
          style={{
            backgroundColor: '#d3c253',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
          }}
        >
          Sort by Name
        </button>
      </div>
      <table
        style={{ width: '80%', margin: '0 auto', borderCollapse: 'collapse' }}
      >
        <thead>
          <tr style={{ backgroundColor: '#d5cb8a' }}>
            <th style={{ borderBottom: '2px solid #ddd', padding: '10px' }}>
              Picture
            </th>
            <th style={{ borderBottom: '2px solid #ddd', padding: '10px' }}>
              Name
            </th>
            <th style={{ borderBottom: '2px solid #ddd', padding: '10px' }}>
              Popularity
            </th>
            <th style={{ borderBottom: '2px solid #ddd', padding: '10px' }}>
              Won Oscar
            </th>
            <th style={{ borderBottom: '2px solid #ddd', padding: '10px' }}>
              Won Emmy
            </th>
            <th style={{ borderBottom: '2px solid #ddd', padding: '10px' }}>
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {contactos.map((contacto, index) => (
            <tr key={index} style={{ textAlign: 'center' }}>
              <td style={{ padding: '10px', backgroundColor: '#cdcbbe' }}>
                <img
                  src={contacto.pictureUrl}
                  alt={contacto.name}
                  width="50"
                  height="50"
                  style={{
                    borderRadius: '50%',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                  }}
                />
              </td>
              <td style={{ padding: '10px' }}>{contacto.name}</td>
              <td style={{ padding: '10px' }}>
                {contacto.popularity.toFixed(2)}
              </td>
              <td style={{ padding: '10px' }}>
                {contacto.wonOscar ? '🏆' : ''}
              </td>
              <td style={{ padding: '10px' }}>
                {contacto.wonEmmy ? '🌟' : ''}
              </td>
              <td style={{ padding: '10px' }}>
                <button
                  onClick={() => handleDelete(contacto.name)}
                  style={{
                    backgroundColor: '#f44336',
                    color: 'white',
                    border: 'none',
                    padding: '5px 10px',
                    borderRadius: '3px',
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
