import React from "react";
import './table.css'
import FunctionButton from "../functionButton/FunctionButton";

class ContactTable extends React.Component {

    render() {
        return (

            <table>
                <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {this.props.contactsProp.map((e, idx) => {
                    return <tr className="tr" key={idx}>
                        <td><img className="img-table" src={e.pictureUrl} /></td>
                        <td><p>{e.name}</p></td>
                        <td><p>{e.popularity.toFixed(2)}</p></td>
                        <td><FunctionButton functionProp={() => this.props.deleteProp(e.name)}>Delete</FunctionButton></td>
                    </tr>

                })}
                </tbody>
            </table>




        )
    }


}



export default ContactTable;








