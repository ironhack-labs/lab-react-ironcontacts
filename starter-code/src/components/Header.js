import React from 'react'
import Controls from './Controls'

const Header = ({ addRandom, sortByName, sortByPopularity }) => (
  <>
    <h1>IronContacts</h1>
    <Controls
      addRandom={addRandom}
      sortByName={sortByName}
      sortByPopularity={sortByPopularity}
    />
  </>
)

export default Header
