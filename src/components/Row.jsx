import styled from 'styled-components'

const Row = ({ contact, isHead }) => {
  return (
    <>
      {isHead ? (
        <TableRow>
          <HeadContent>
            <h3>Picture</h3>
          </HeadContent>
          <HeadContent>
            <h3>Name</h3>
          </HeadContent>
          <HeadContent>
            <h3>Popularity</h3>
          </HeadContent>
          <HeadContent>
            <h3>Won an Oscar</h3>
          </HeadContent>
          <HeadContent>
            <h3>Won an Amy</h3>
          </HeadContent>
        </TableRow>
      ) : (
        <TableRow>
          <Tcontent>{<Img src={contact.pictureUrl} alt={contact.name} />}</Tcontent>
          <Tcontent>
            <p>{contact.name}</p>
          </Tcontent>
          <Tcontent>
            <span>{contact.popularity.toFixed(2)}</span>
          </Tcontent>
          <Tcontent>{contact.wonOscar && <p>🏆</p>}</Tcontent>
          <Tcontent>{contact.wonEmmy && <p>🏆</p>}</Tcontent>
        </TableRow>
      )}
    </>
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
const HeadContent = styled.td`
  width: calc(100% / 3);
  display: flex;
  justify-content: center;
`
