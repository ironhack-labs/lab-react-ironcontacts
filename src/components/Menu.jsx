export default function Menu (props) {;
    const {handleRandom, sortByName, sortByPopularity} = props
    return (
        <div>
            <h1>IronContacts</h1>
            <button onClick={() => handleRandom()} className="btn-add">
                Add Random Contact
            </button>
            <button onClick={() => sortByName()} className="btn-add">
                Sort by Name
            </button>
            <button onClick={() => sortByPopularity()} className="btn-add">
                Sort by Popularity
            </button>
        </div>
    )
}