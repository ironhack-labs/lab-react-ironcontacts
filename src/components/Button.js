import "bulma/css/bulma.css"
const Button = ({ children, onClick, className, disabled }) => (
  <button disabled={disabled} className={className} onClick={onClick}>
    {children}
  </button>
)

export default Button
