import styled from 'styled-components'

const Buttons = ({ addRandom, addRandomError }) => {
  return (
    <Wrapper>
      <Random>
        <button onClick={addRandom}>Add Random Contact</button>
        {addRandomError && <Error>{addRandomError}</Error>}
      </Random>
    </Wrapper>
  )
}

export default Buttons

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
`
const Random = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Error = styled.p`
  color: red;
`
