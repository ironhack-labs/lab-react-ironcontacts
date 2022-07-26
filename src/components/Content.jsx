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
  return (
    <>
      <Buttons addRandom={addRandomHandler} addRandomError={message} />
      <Wrapper>
        <Table>
          <thead>
            <TableRow>
              <Tcontent>
                <h3>Picture</h3>
              </Tcontent>
              <Tcontent>
                <h3>Name</h3>
              </Tcontent>
              <Tcontent>
                <h3>Popularity</h3>
              </Tcontent>
              <Tcontent>
                <h3>Won an Oscar</h3>
              </Tcontent>
              <Tcontent>
                <h3>Won an Amy</h3>
              </Tcontent>
            </TableRow>
          </thead>
          <tbody>
            {lists.firstPart.map((item) => (
              <Row key={item.id} contact={item} />
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
  width: 70%;
`
const TableRow = styled.tr`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Tcontent = styled.td`
  width: calc(100% / 3);
  display: flex;
  justify-content: center;
`
