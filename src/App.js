import logo from './logo.svg'
import './App.css'
import contacts from './contacts.json'
import Table from './components/Table'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Contacts</h1>
        {/* <table className='contacts-table'>
          <tr>
            <th>picture</th>
            <th>name</th>
            <th>popularity</th>
          </tr>
          {contacts.map((contact) => {
            return (
              <tr>
                <td>
                  <img src={contact.pictureUrl} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
              </tr>
            )
          })}
        </table> */}
        <Table data={contacts} />
      </header>
    </div>
  )
}

export default App
