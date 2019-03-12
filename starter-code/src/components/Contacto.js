
import React, {Component} from "react";
import 'antd/dist/antd.css'; 
import {Button} from 'antd';
import {Row, Col} from 'antd';

// we enter the props of the jason, what we are calling, printing on screen, lo llamaremos en una lista

//

class Contacto extends Component{

  render (){
    return(

      <div>
        <Row gutter={8} type="flex" justify="center">
          <Col span={4}><img className="img-contact" alt="" src={this.props.pictureUrl}/></Col>
          <Col span={4}>{this.props.name}</Col>
          <Col span={4}>{this.props.popularity}</Col>
          <Col span={4}><Button type="danger" onClick={this.props.delContact}>Delete</Button></Col>
        </Row>
      </div>

    )
  }
}

export default Contacto;



