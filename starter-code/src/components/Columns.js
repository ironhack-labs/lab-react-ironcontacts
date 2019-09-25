import React from 'react'
import { Row, Col, Typography } from 'antd'
const { Title } = Typography

function Columns() {
  return (
    <Row type="flex" justify="center">
      <Col span={4}>
        <Title level={3}>Picture</Title>
      </Col>
      <Col span={4}>
        <Title level={3}>Name</Title>
      </Col>
      <Col span={4}>
        <Title level={3}>Popularity</Title>
      </Col>
      <Col >
        <Title level={3}>Action</Title>
      </Col>
    </Row>
  )
}

export default Columns