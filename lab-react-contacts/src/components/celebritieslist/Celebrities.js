import './Celebrities.css'

const Celebrities = ({ name, pictureUrl, popularity, deleteCelebrity}) => {

    return (
        <section className='section1'>
        <div>      
         <img src={pictureUrl} alt='Profile picture'/>
        </div>
        <div>       
          <p>{name}</p>    
        </div>
        <div>         
          <p>{popularity}</p>   
        </div>
        <div>
        <button className='delete' onClick={deleteCelebrity} style={{color:'white'}} >Delete</button>
        </div>
      </section>

    )
}

    export default Celebrities