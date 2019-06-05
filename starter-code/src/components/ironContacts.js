import React from 'react'
import { Table } from './table'


const IronContacts = ({ name, pictureUrl, popularity, removeContact }) =>

  <div>
    <Table name={name} pictureUrl={pictureUrl} popularity={popularity} method={removeContact} label={'Borrar'} />
  </div>


export default IronContacts