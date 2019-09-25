import React from 'react'
import { Card, Icon, Progress } from 'antd';

const { Meta } = Card;

export default function Contact({data, remove}) {
  return (

    <Card
    style={{ width: 240, margin: '20px' }}
    cover={
      <img
        alt={data.name} 
        src={data.pictureUrl}
      />
    }

    actions={[
      <Icon onClick={()=>remove(data.name)} type="delete" key="delete" />
    ]}
  >
    <Meta
      title={data.name} 
    />
    <p style={{ marginTop: '10px', marginBottom: 0 }}>Popularity</p>
     <Progress percent={data.popularity.toFixed(2)} width={50} />
  </Card>
  )
}