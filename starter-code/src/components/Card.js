import React from 'react';
import { Card, Avatar } from 'antd';
import Boton from './Button';

const { Meta } = Card;


const IdCards = (props) => props.contacts.map((star) => (
   <Card
    key= {star.id}
    style={{ width: 300, marginTop: 16 }}>
      <Meta
        avatar={<Avatar src={star.pictureUrl} />}
        title={star.name}
        description={`Popularity: ${star.popularity}`}
      />
      <Boton function= { (e) => props.function(e, star.id)} texto="Borar Carta"/>
      {/* <Boton function="this.DeleteCard" texto="Borar Carta"/> */}
   </Card>
 ))


export default IdCards