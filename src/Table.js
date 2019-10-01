import React, { Component } from 'react'
import Contact from './Contact'

export default class Table extends Component {
  oneLevel = () => {
    console.log('we made it one level up')
  }
  render() {
    console.log(this)
    return (
          <table>
            <thead>
            <tr>
                <th>
                  Name
                </th>
                <th>
                  Image
                </th>
                <th>
                  Popularity
                </th>
            </tr>
            </thead>
          <tbody>
            { this.props.starterContacts.map((celeb, i) => {
              return <Contact deleteOne={() => this.props.deleteOne(i)} celeb={celeb} />
            })}
          </tbody>
        </table>
    )
  }
}
