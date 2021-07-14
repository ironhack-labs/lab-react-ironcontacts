const Button = ({ name, fn }) => {


    return (
        <button onClick={fn}>{name}</button>
    )


}

export default Button;