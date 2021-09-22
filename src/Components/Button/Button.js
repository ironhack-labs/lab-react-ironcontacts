const Button = (props) => {
    return (
        <button className="btn btn-outline-primary" onClick={() => props.func()} >{props.children}</button>

    )
}
export default Button