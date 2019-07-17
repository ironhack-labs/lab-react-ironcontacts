import React from 'react'
import { Table, Button } from 'antd'

function HomeContacts(props){
  const columns = [
    {
      title: 'Picture',
      dataIndex: 'pictureUrl',
      key: 'pictureUrl',
      render: picture => <img src={picture} alt="img" width = "100"/>
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: name => <b>{name}</b>
    },
    {
      title: 'Popularity',
      dataIndex: 'popularity',
      key: 'popularity',
      render: popularity => <b>{popularity.toFixed(2)}</b>
    },
    {
      title: 'Action',
      key: 'id',
      render: id => (
        <Button onClick = {props.deleteContact(id)}>Delete</Button>
      ),
    }
  ]
  return <Table dataSource={props.contacts} columns={columns} />
}

export default HomeContacts