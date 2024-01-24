const Button = ({children, onClick, disabled = false }) => {
   
    return (
      <button onClick={onClick} className="btn btn-secondary" disabled={disabled}>
        {children}
      </button>
    )
  }
  
  export default Button;