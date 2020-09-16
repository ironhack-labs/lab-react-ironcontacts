import React from 'react'
import styled from "styled-components"

const Head = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin: 30px 0px;

th{
    padding: 0  60px;
}

`

function TableHead() {
    return (
        <Head>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
            </tr>  
        </Head>
    )
}

export default TableHead
