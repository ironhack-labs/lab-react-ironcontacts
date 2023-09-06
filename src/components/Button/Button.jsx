const Button = ({ children, onClick, extraClassName = '', type = 'primary', htmlType = 'submit' }) => {
    return (
      <button
        className={`btn btn-${type} ${extraClassName}`}
        onClick={onClick}
        type={htmlType}
      >
        {children}
      </button>
    )
  }
  
  export default Button;