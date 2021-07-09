import styled from 'styled-components'

function DisplayContacts({ contact, remove }) {
  return (
    <tbody>
      <TrContent>
        <td>
          {' '}
          <ProfileImg src={contact.pictureUrl}></ProfileImg>
        </td>
        <td>{contact.name}</td>
        <td>
          {contact.popularity}
          <button onClick={() => remove(contact.id)}>remove</button>
        </td>
      </TrContent>
    </tbody>
  )
}

const TrContent = styled.tr`
  & > td {
    text-align: center;
    vertical-align: middle;
  }
`

const ProfileImg = styled.img`
  width: 8rem;
  padding: 0.5rem;
`

export default DisplayContacts
