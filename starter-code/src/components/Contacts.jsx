import React from 'react'
import { Card, Icon, Progress } from 'antd';

const { Meta } = Card;

export default function Contact({data, remove}) {
  return (

    <Card
    style={{ width: 200, margin: '50px' }}
    cover={
      <img
        alt={data.name} 
        src={data.pictureUrl}
      />
    }
   
    actions={[
      // <Icon type="setting" key="setting" />,
      // <Icon type="edit" key="edit" />,
      <Icon onClick={()=>remove(data.name)} type="delete" key="delete" />
    ]}
  >
    <Meta
      title={data.name} 
    />
    <p style={{ marginTop: '15px', marginBottom: 0 }}>Popularity</p>
     <Progress type="circle" percent={data.popularity.toFixed(2)} width={50} />
  </Card>
  )
}
