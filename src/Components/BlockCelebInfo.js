import React from 'react'
import { ButtonPiece } from './ButtonPiece';

//const BlockCelebInfo = ({name, pictureUrl, popularity}) => {
const BlockCelebInfo = (props) => {
    return (
        <tr>
            <td><img src={props.pictureUrl} height="200px" alt="" /></td>
            <td>{props.name}</td>
            <td>{props.popularity}</td>
            <td><ButtonPiece onClick={()=>props.delete(props.index)}>DELETE</ButtonPiece></td>
        </tr>
        
    )
}

export default BlockCelebInfo;

// {
//     "name": "Idris Elba",
//     "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
//     "popularity": 11.622713,
//     "id": "11731993-0604-4bee-80d5-67ad845d0a38"
//   },