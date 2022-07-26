import { useState } from 'react'
import styled from 'styled-components'
import contacts from '../contacts.json'
import Row from './Row'

const Content = () => {
  const [list, setList] = useState(contacts.filter((contact, index) => index < 5))
  return (
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
        {list.map((item) => (
          <Row pic={item.pictureUrl} name={item.name} rating={item.popularity.toFixed(2)} wonOscar={item.wonOscar} wonEmmy={item.wonEmmy} />
        ))}
      </Table>
    </Wrapper>
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
