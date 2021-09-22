function Button(props) {

    return (
        <button onClick ={()=>props.func()}>
            {props.children}
        </button>
    )
}

export default Button