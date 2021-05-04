import './Table.css'

const Table = ({picture, name, popularity, deleteOneContact}) =>{
    return(
        <article>
            <div className="eachContact">
                <img src={picture}></img>
                <h2>{name}</h2>
                <p>{popularity}</p>
                <button onClick={deleteOneContact}>Eliminar Contacto</button>
            </div>
        </article>
    )

}

export default Table