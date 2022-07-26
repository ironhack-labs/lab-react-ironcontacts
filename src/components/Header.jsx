import styled from 'styled-components'

const Header = () => {
  return (
    <Title>
      <h1>Iron contacts</h1>
    </Title>
  )
}

export default Header

const Title = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`
