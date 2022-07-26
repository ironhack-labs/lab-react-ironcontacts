import styled from 'styled-components'

const Row = ({ pic, name, rating, wonOscar, wonEmmy }) => {
  return (
    <TableRow>
      <Tcontent>{<Img src={pic} alt={name} />}</Tcontent>
      <Tcontent>
        <p>{name}</p>
      </Tcontent>
      <Tcontent>
        <span>{rating}</span>
      </Tcontent>
      <Tcontent>{wonOscar && <p>🏆</p>}</Tcontent>
      <Tcontent>{wonEmmy && <p>🏆</p>}</Tcontent>
    </TableRow>
  )
}

export default Row

const TableRow = styled.tr`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Tcontent = styled.td`
  width: calc(100% / 3);
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  font-size: 1.5rem;
  :last-child {
    border-right: none;
  }
`
const Img = styled.img`
  max-width: 50%;
`
