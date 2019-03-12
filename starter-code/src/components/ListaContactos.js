import React, {Component} from "react"
import Contacto from "./Contacto"
import 'antd/dist/antd.css'; 
import {Button, Divider} from 'antd';
import {Row, Col} from 'antd';

class ListaContactos extends Component {

  state = {
    arregloIni: []
  };

  componentDidMount() {
    let arreglo = this.props.contactos.slice(0,5);
    this.setState({arregloIni: arreglo})
  }

  addRandom = () => {
    let random = Math.floor(Math.random() * Math.floor(this.props.contactos.length));
    let arreglo;
   while(this.state.arregloIni.includes(this.props.contactos[random]))
      random = Math.floor(Math.random() * Math.floor(this.props.contactos.length));
      arreglo = [...this.state.arregloIni]
      arreglo.push(this.props.contactos[random])
      this.setState({arregloIni:arreglo});
  }
  
  sortByName = () => {
    let sortArray;
    sortArray = [...this.state.arregloIni]
    sortArray.sort( (a, b)=> {
      if(a.name > b.name) {return 1;}
      if(a.name < b.name) {return -1}
      return 0;
    });
    this.setState({arrelgloIni: sortArray})
    console.log(sortArray)
  };

  sortByPopularity = () => {
    let arreglo;
    arreglo = [...this.state.arregloIni]
    arreglo.sort((a,b)=>{
      console.log(a)
      return ( b.popularity - a.popularity) 
    });
    this.setState({arregloIni: arreglo})
  };

  deleteContact = (indx) => {
    let arreglo;
    arreglo = [...this.state.arregloIni]
    arreglo.splice(indx,1)
    this.setState({arregloIni:arreglo})
  };

  render(){
    return (
     <div>
          <div>
            <Row gutter={8} type='flex' justify='center'>
              <Col span={6}><Button type="default" onClick={this.addRandom}>Add a random artist</Button></Col>
              <Col span={6}><Button type="default" onClick={this.sortByName}>Sort by artist name</Button></Col>
              <Col span={6}><Button type="default" onClick={this.sortByPopularity}>Sort by artist popularity</Button></Col>
            </Row>
          </div>

            <Divider/>
       
          <div>
            <Row gutter={8} type='flex' justify='center'>
              <Col span={4}><h3>Pic</h3></Col>
              <Col span={4}><h3>Name</h3></Col>
              <Col span={4}><h3>Popularity</h3></Col>
            </Row>
          </div>

            {this.state.arregloIni.map((contacto, indx)=>(
              <Contacto key={indx} {...contacto} delContact = { ()=> this.deleteContact(indx)}/>
            ))}
     </div>
    )
  }
}

export default ListaContactos