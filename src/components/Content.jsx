import { useState } from 'react'
import styled from 'styled-components'
import contacts from '../contacts.json'
import Buttons from './Buttons'
import Row from './Row'

const Content = () => {
  const [lists, setLists] = useState({ firstPart: contacts.filter((contact, index) => index < 5), secondPart: contacts.filter((contact, index) => index >= 5) })
  const [message, setMessage] = useState('')

  const addRandomHandler = () => {
    if (!lists.secondPart[0]) return setMessage('There are no more contacts left to add...')

    const random = Math.floor(Number((Math.random() * (lists.secondPart.length - 1)).toFixed(0)))

    const newArrays = { firstPart: [lists.secondPart[random], ...lists.firstPart], secondPart: lists.secondPart.filter((contact, index) => index !== random) }

    return setLists(newArrays)
  }

  const sortByNameHandler = () => {
    const firstListCopy = [...lists.firstPart]
    const sorted = {
      ...lists,
      firstPart: firstListCopy.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
        return 0
      }),
    }
    return setLists(sorted)
  }

  const sortByPolularityHandler = () => {
    const firstListCopy = [...lists.firstPart]
    const sorted = {
      ...lists,
      firstPart: firstListCopy.sort((a, b) => b.popularity - a.popularity),
    }
    return setLists(sorted)
  }

  const deleteContactHandler = (contactId) => {
    setLists({ ...lists, firstPart: lists.firstPart.filter((contact) => contactId !== contact.id) })
  }
  return (
    <>
      <Buttons addRandom={addRandomHandler} addRandomError={message} sortByName={sortByNameHandler} sortByPopularity={sortByPolularityHandler} />
      <Wrapper>
        <Table>
          <thead>
            <Row isHead={true} />
          </thead>
          <tbody>
            {lists.firstPart.map((item) => (
              <Row key={item.id} contact={item} remove={deleteContactHandler} />
            ))}
          </tbody>
        </Table>
      </Wrapper>
    </>
  )
}

export default Content

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Table = styled.table`
  width: 90%;
  margin-bottom: 3rem;
`
