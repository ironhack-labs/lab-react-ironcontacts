

const Contact = ({ name, pictureUrl, popularity }) => {

    return (

        <article >
            <img src={pictureUrl} width= "100px" alt=""></img> 
            <p>{name}</p>
            <p>{popularity}</p>
        </article>
    )
}

export default Contact