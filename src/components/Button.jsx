const supportedTypes = ['primary', 'secondary', 'warning', 'danger', 'success'];

const Button = ({ type = 'primary', children, onClick, disabled = false }) => {
  const buttonType = supportedTypes.includes(type) ? type : 'primary';
  
  return (
    <button onClick={onClick} className={`btn btn-${buttonType}`} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button;