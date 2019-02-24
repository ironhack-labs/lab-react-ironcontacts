import React, {Component} from "react";
import { Button } from 'antd';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

class Contacto extends Component{

  render (){

    return(

      <div>
        <br/>
        <Row  gutter={8} type="flex" justify="center">
          <Col span={4}>
            <img className="img-contact" src={this.props.pictureUrl}/>
          </Col>
          <Col span={4}>
            {this.props.name}
          </Col>
          <Col span={4}>
            {this.props.popularity}
          </Col>
          <Col span={4}>
            <Button type="danger"onClick = {this.props.borraContacto}>Delete</Button>
          </Col>
        </Row>
      </div>

    )
  }
}

export default Contacto;
