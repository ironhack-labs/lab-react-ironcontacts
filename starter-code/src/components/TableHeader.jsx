import React , {Component} from 'react';


class TableHeader extends Component{

    render(){

        return (

            <thead>
            <tr>

              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>


        )
    }

}

export default TableHeader;