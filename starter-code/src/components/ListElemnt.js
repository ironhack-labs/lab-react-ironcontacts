import React from 'react'
import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import Image from 'react-bulma-components/lib/components/image';
import Heading from 'react-bulma-components/lib/components/heading';
import { Button } from 'react-bulma-components';

export default (props) => {
const {contact} = props
return (
  <div>
    <Card>
      <Card.Content>
        <Media>
          <Media.Item position="left">
            <Image size={64} alt="64x64" src={contact.pictureUrl} />
          </Media.Item>
          <Media.Item>
            <Heading size={4}>{contact.name}</Heading>
            <Heading subtitle size={6}>
              Popularity {contact.popularity}
            </Heading>
          </Media.Item>
          <Button color="danger" onClick={()=>props.delete(props.index)}>
            Delete
          </Button>          
        </Media>
      </Card.Content>
    </Card>
  </div>
  )
}