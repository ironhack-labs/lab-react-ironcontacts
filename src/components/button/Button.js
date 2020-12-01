import './Button.css'

const Button = ({ text, event }) => {
  return (
    <button className='custom-btn' onClick={event}>{text}</button>
  )
}

export default Button