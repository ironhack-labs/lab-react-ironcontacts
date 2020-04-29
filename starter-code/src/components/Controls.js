import React from 'react'

const Controls = ({ addRandom, sortByName, sortByPopularity }) => (
  <section>
    <button onClick={addRandom}>Add random contact</button>
    <button onClick={sortByName}>Sort by name</button>
    <button onClick={sortByPopularity}>Sort by popularity</button>
  </section>
)

export default Controls
