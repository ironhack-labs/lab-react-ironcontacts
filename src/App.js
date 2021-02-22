import contacts from './contacts.json'

const contactRow = () => {
  contacts.map(contact => {
    return 
  })
}

function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {contacts.map((contact, index) => {
          if(index < 5){
            return(
            <tr key={contact.id}>
              <td><img style={{width:'10vw'}} src={contact.pictureUrl} alt={contact.name}/></td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
            </tr>
          )
          }
        })}
          

      </table>
    </div>
  );
}

export default App;
