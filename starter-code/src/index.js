//Lo importamos porque vamos a usar un componente (App)
import React from 'react'
//Para que se pueda renderizar en el DOM y utilizar sus metodos, lo importamos
import ReactDOM from 'react-dom'
import App from './App'
import './index.scss'

//Metodo de react para renderizar con 2 parametros (que renderizar y donde)
//Como es un componente, se crea (App.jsx) (que) segundo (donde)
ReactDOM.render(<App/>, document.querySelector('#root'))
