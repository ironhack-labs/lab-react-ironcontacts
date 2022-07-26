import styled from 'styled-components'

const Row = ({ pic, name, rating }) => {
  return (
    <TableRow>
      <Tcontent>{<Img src={pic} alt={name} />}</Tcontent>
      <Tcontent>
        <p>{name}</p>
      </Tcontent>
      <Tcontent>
        <span>{rating}</span>
      </Tcontent>
    </TableRow>
  )
}

export default Row

const TableRow = styled.tr`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`
const Tcontent = styled.td`
  width: calc(100% / 3);
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
`
const Img = styled.img`
  max-width: 30%;
`
