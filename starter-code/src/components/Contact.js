import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <table className="table" style={{ textAlign: 'center', margin: 'auto' }}>
          <tbody>
            <tr className="list-group list-group-horizontal-lg">
              <td className="list-group-item col-lg-3"><img src={this.props.pictureUrl} height="250" width="150" alt="img"></img></td>
              <td className="list-group-item col-lg-3">{this.props.name}</td>
              <td className="list-group-item col-lg-3">{this.props.popularity}</td>
              <td className="list-group-item col-lg-3"><button onClick={this.props.clicktoDelete} className="btn btn-danger">Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Contact 