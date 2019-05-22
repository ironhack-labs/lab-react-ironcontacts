import React from 'react'
import ListElemnt from './ListElemnt'
import { Button } from 'react-bulma-components';

export default (props) => (
  <div>
    <Button color="primary" onClick={()=>props.addRandomContact(Math.random() * (props.total - 8) + 8)}>
      Add Random Contact
    </Button>
    <Button  onClick={()=>props.sortByName()}>
      Sort By Name
    </Button>
    <Button  onClick={()=>props.sortByPopularity()}>
      Sort By Popularity
    </Button>
    {props.contacts.map((e,i)=>(
      <ListElemnt contact = {e} index={i} key={i} delete = {props.delete}/>
    ))}
  </div>
)