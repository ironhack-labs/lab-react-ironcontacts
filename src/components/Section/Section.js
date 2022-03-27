import React from 'react';
import './Section.css'


const Section = ({className, children}) => {
  return (
    <section className={className}> {children} </section>
  )
}

export default Section