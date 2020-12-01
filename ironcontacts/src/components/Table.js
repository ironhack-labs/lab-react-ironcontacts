import ContactCard from './ContactCard'
import './Table.css'

const Table = ({ celebs }) => {


    return (
        <div className="table">
            <table>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                </tr>
                <tr>
                 {celebs.map(elm => <ContactCard key={elm._id} pictureUrl={elm.pictureUrl} name={elm.name} popularity={elm.popularity}/>)
                }
                </tr>                               
            </table>    
        </div>
    )
}

export default Table