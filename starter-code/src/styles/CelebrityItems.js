import styled from "styled-components";

export const CelebrityItems = styled.div`
  display: flex;
  padding-top: 1em;
  justify-content: center;
  align-items: center;
  p {
    align-self: center;
    width: 20%;
    text-align: center;
  }
  p:last-child {
    width: 10%;
  }
`;

export const CelebrityImage = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  img {
    width: 5em;
  }
`;

export const CelebrityTable = styled(CelebrityItems)`
  font-weight: bold;
  font-size: 1.5rem;
`;

export const CelebrityTitle = styled.h1`
  text-align: center;
  font-size: 2.8rem;
`;

export const ButtonCelebrity = styled.button`
  padding: 1em;
  cursor: pointer;
  font-size: 0.8rem;
  margin-left: 32%;
  margin-right: 30%;
  margin-bottom: 1rem;
`;
