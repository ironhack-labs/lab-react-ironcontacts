import React from 'react'
import Stars from './Stars'
import './Rating.css'


const Rate = ({rate}) => {
const stars = Array.from({length: Math.round(rate)},(v, i)=> '☆')
const unmarkedStars = Array.from({length: Math.abs(5-stars.length)},(v,i)=> '☆')
    return (
        <div>

                <span className='stars'>
                    {stars.map((star,i) => <Stars key={i+1} star={star} elemClass={'marked'}/>)}
                     {unmarkedStars.map((star,i) => <Stars key={i+1} star={star} elemClass={'unmarked'}/>)}
                </span>

        </div>
    )
}

export default Rate
