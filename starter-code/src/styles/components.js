import styled from "styled-components";

export const Raw = styled.tr`
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 1rem 2rem;
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 1px 2px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  td {
    width: 22%;
    height: 100px;
    text-align: center;
  }
  img {
    width: 30%;
  }
  div {
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    display: flex;
    height: 10%;
    width: calc(100% - 4rem);
    justify-content: space-around;
  }  
  &:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

