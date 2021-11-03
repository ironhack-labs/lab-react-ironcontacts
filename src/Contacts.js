import React from "react"
export default function Contacts (props){

  return (
  <>
    <div className="contact-details">
      <div>
          <table>
            <thead>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </thead>
            <tbody>
              <tr>
                <td><img src={props.pictureUrl} alt="actor"></img></td>
                <td>{props.name}</td>
                <td>{props.popularity}</td>
              </tr>
            </tbody>
          </table>
      </div>
    
  </div>
  </>
  )
}
