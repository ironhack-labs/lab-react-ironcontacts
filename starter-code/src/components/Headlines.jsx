import React, { Component } from 'react';
import Contacts from './Contacts';

class Headlines extends Component {
    render() {
          return (
            <table>
              <thead>
                <tr>
                  <td>Picture</td>
                  <td>Name</td>
                  <td>Popularity</td>
                </tr>
              </thead>
              <tbody>
                    <Contacts />
              </tbody>
            </table>
          );
    }
}

export default Headlines;
