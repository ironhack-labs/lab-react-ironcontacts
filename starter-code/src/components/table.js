import React from 'react'
import Buttons from './buttons'


export const HeadTable = ({ labelCol1, labelCol2, labelCol3, labelCol4 }) =>

  <div className="row">

    <div className="col">
      <h2>{labelCol1}</h2>
    </div>
    <div className="col">
      <h2>{labelCol2}</h2>
    </div>
    <div className="col">
      <h2>{labelCol3}</h2>
    </div>
    <div className="col">
      <h2>{labelCol4}</h2>
    </div>

  </div>


export const Table = ({ name, pictureUrl, popularity, method, label }) =>

  <div className="row">

    <div className="col">
      <h2>{name}</h2>
    </div>
    <div className="col">
      <img src={pictureUrl} alt="Iron-contact-image"></img>
    </div>
    <div className="col">
      <h3>{popularity}</h3>
    </div>
    <div className="col">
      <Buttons method={method} label={label} />
    </div>
  </div>

