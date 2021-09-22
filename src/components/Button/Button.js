import './Button.css'

const Button = (props) => {
    return (
        <button className="button" onClick={() => props.func()}>{props.children}</button>
    )
}

export default Button