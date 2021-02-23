import "./App.css"

import contacts from "../contacts.json"
import Table from "./Table"

function App() {
  const twoContacts = [
    contacts[0],
    contacts[1],
    contacts[2],
    contacts[3],
    contacts[4],
  ]

  return (
    <>
      <Table className="contacts-table" contacts={twoContacts} />
    </>
  )
}

export default App
