import React, { Component } from 'react';

export default function SearchField () {
   const handleChange = event => {
       props.setQuery(event.target.value)
   }
    return (
      <div>
        <input type="text" name="query" value={props.query} onChange={handleChange} />
      </div>
    );
  }
}
