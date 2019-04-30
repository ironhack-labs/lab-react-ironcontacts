import React from 'react'

export default class Row extends React.Component {
  render() {
    return (
      <tr>
        <td><img src={this.props.picture} height='100' weight='100'/></td>
        <td><p>{this.props.name}</p></td>
        <td><p>{this.props.popularity}</p></td>
      </tr>
    )
  }
}
