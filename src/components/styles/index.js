import styled from 'styled-components';

export const ContactRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 40rem;
  margin: 1rem;
  border-radius: 1.2rem;
  padding: 2rem 0;
  box-sizing: border-box;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.12);
  img {
    width: 4rem;
    border-radius: 50%;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.02);
  }
  h3 {
    width: 5rem;
  }
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 3.25rem;
  }
  h2 {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  button {
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    border: none;
    border-radius: 1.2rem;
    border-bottom: 2px solid black;
    &:hover {
      border-color: rgba(0, 0, 0, 0.1);
    }
    &:active {
      border-bottom: none;
      border-top: 2px solid rgba(0, 0, 0, 0.4);
    }
  }
  #buttons-group {
    height: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  #buttons-group button {
  }
`;
