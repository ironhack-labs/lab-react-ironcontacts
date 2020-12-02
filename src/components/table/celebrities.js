import './table.css'

const Celebrities = ({ name, pictureUrl, popularity , idx}) => {


    return (
       
     <>
      <th><img src={pictureUrl} alt="celebrity"></img></th>
            <th><p>{name}</p></th>
                <th><p>{popularity}</p></th>

            

       </>    

        // <article className="movie-card">
        //     <h3>{title}</h3>
        //     <p>{director}</p>
        //     <small>{hasOscar ? '¡Tuvo Oscar!' : 'No tuvo Oscar'}</small>
        //     <hr></hr>
        //     <button onClick={deleteMovie}>Eliminar película</button>
        // </article>
    )
}

export default Celebrities