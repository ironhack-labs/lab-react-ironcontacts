import styled from 'styled-components'

const Buttons = ({ addRandom, addRandomError, sortByName, sortByPopularity }) => {
  return (
    <Wrapper>
      <Random>
        <button onClick={addRandom}>Add Random Contact</button>
        {addRandomError && <Error>{addRandomError}</Error>}
      </Random>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
    </Wrapper>
  )
}

export default Buttons

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  column-gap: 5%;
  > button {
    align-self: center;
  }
`
const Random = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Error = styled.p`
  color: red;
`
