import './Button.css'

const Button = ({ buttonAction, buttonText }) => {

    return (
        <button className="basicButton" onClick={buttonAction}>{buttonText}</button>
    )
}

export default Button