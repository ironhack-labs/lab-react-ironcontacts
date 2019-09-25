import React from 'react';
import styled from 'styled-components';

const Tr = styled.tr`
  :nth-child(even){
      background-color: #f2f6ff;
  }
  td > img {
      padding: 10px;
  }
  td{
    border: 1px solid #b1bcd5;
  }
`;
const Button=styled.button`
    padding: 10px 15px;
    background:#d85757;
    color: white;
    border:none;
    border-radius:3px;
`

function Contact ({data, deleteC}){
    return(
        <Tr>
            <td><img width="100px" src={data.pictureUrl} alt={data.name}/></td>
            <td>{data.name}</td>
            <td>{data.popularity}</td>
            <td><Button onClick={() => deleteC(data.name)}>Delete</Button></td>
        </Tr>
    )
}

export default Contact;