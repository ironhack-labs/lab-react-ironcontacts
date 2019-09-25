import React from 'react'
import { Row, Col, Typography, Button } from 'antd'
const { Text } = Typography

function Contacts({ key, contact, deleteContact }) {
  return (
    <Row type="flex" justify="center" align="middle" key={key}>
      <Col span={4}>
        <img src={contact.pictureUrl} title={contact.name} alt={contact.name} width="80px" />
      </Col>
      <Col span={4}>
        <Text >{contact.name}</Text>
      </Col>
      <Col span={4}>
        <Text >{contact.popularity}</Text>
      </Col>
      <Col >
        <Button type="danger" icon="delete" onClick={() => deleteContact(contact.name)}>Delete</Button>
      </Col>
    </Row>
  )
}

export default Contacts