import React from 'react';
import { Button } from 'antd';

const Boton = (props) =>
<Button onClick={props.function} type="primary"> {props.texto} </Button>


export default Boton