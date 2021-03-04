function Button({label, onClick }) {
    return(
        <button type="button" className="btn btn-outline-secondary" onClick={onClick}>
            {label}
        </button> 
    )
}
Button.defaultProps = {
    onClick: () => {}
}
export default Button