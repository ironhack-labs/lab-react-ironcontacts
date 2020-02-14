import React, { Component } from "react";

class TableBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.artistArray.map((artist, idx) => {
          return (
            <table className='table'>
              <tr>
                <td>
                  <img src={artist.pictureUrl} alt="artist" style={{width:'20vw'}}/>
                </td>
                <td>
                  <p>{artist.name}</p>
                </td>
                <td>
                  <p style={{'margin-left':'5vw'}}>{artist.popularity}</p>
                </td>
                <td>

              <button style={{'margin-left':'5vw'}} onClick={() => this.props.clickToDelete(idx)}>Delete</button>
                </td>
              </tr>
            </table>
          );
        })}
      </div>
    );
  }
}

export default TableBody;
