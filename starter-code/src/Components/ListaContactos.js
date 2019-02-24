import React, {Component} from "react"
import Contacto from "./Contacto"
import { Button } from 'antd';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { Divider } from 'antd';

class ListaContactos extends Component {

  state = {
    arregloIni: []
  };

  componentDidMount() {
    let arreglo = this.props.contactos.slice(0,5);
    this.setState({arregloIni: arreglo})
  }

  addRandom = () => {
    let aleatorio = Math.floor(Math.random() * Math.floor(this.props.contactos.length));
    let arreglo;
    while(this.state.arregloIni.includes(this.props.contactos[aleatorio]))
      aleatorio = Math.floor(Math.random() * Math.floor(this.props.contactos.length));
    arreglo= [...this.state.arregloIni]
    arreglo.push(this.props.contactos[aleatorio])
    this.setState({arregloIni: arreglo})
  }

  sortByName = () => {
    let arreglo;
    arreglo= [...this.state.arregloIni]
    arreglo.sort((a, b)=>{
      if(a.name.toLowerCase() > b.name.toLowerCase())
        return 1;
      if(a.name.toLowerCase() < b.name.toLowerCase())
        return -1;
      return 0;
    });
    this.setState({arregloIni: arreglo})
  }

  sortByPopularity = () => {
    let arreglo;
    arreglo= [...this.state.arregloIni]
    arreglo.sort((a, b)=>{
      return (b.popularity-a.popularity)
    });
    this.setState({arregloIni: arreglo})
  }

  deleteContact = (indice) => {
    let arreglo;
    arreglo= [...this.state.arregloIni]
    arreglo.splice(indice,1)
    this.setState({arregloIni: arreglo})
  }


  render(){
    return (
      <div>
        <div>
          <Row  gutter={8} type="flex" justify="center">
            <Col span={6}><Button type="primary" onClick={this.addRandom}>Add Random Contact</Button></Col>
            <Col span={6}><Button type="primary" onClick={this.sortByName}>Sort by Name</Button></Col>
            <Col span={6}><Button type="primary" onClick={this.sortByPopularity}>Sort by Popularity</Button></Col>
          </Row>
        </div>
        <Divider />
        <div>
          <br/><br/>
          <Row  gutter={8} type="flex" justify="center">
            <Col span={4}>
              <h3 className="fondo">Picture</h3>
            </Col>
            <Col span={4}>
              <h3 className="fondo">Name</h3>
            </Col>
            <Col span={4}>
              <h3 className="fondo">Popularity</h3>
            </Col>
            <Col span={4}>
              <h3 className="fondo">X</h3>
            </Col>
          </Row>
        </div>

        {
          this.state.arregloIni.map((contacto, index)=>(
            //return (
              <Contacto key={index} {...contacto} borraContacto = {() => this.deleteContact(index)}/>
          //)
        ))}
      </div>
    )
  }
}

export default ListaContactos
