import styled from 'styled-components'

export const Button = styled.button`
  font-weight: bold;
  font-size:1em;
  padding:.5rem;
  cursor:pointer;
  border: solid medium;
  margin-right:.5rem;
  border-color: ${props => props.type==='Delete' ? 'crimson' : 'green'}
  color: ${props => props.type==='Delete' ? 'crimson' : 'green'}
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover{
    background-color: ${props => props.type==='Delete' ? 'crimson' : 'green'}
    border-color: ${props => props.type==='Delete' ? 'crimson' : 'green'}
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  color:white;
  }
`
export const Section = styled.section`
  position:relative;
  margin: 0 auto;
  width:700px;
`

export const Navbar = styled.nav`
  display:flex;
  justify-content:center;
  margin-bottom:50px;
`

export const Img = styled.img`
  width:50px;
`

export const Table = styled.table`
  width: 100%;
  text-align: center;
`

