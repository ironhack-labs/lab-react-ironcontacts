const Button = ({ onClick, text, type = "info" }) => {
  return (
    <button className={`btn btn-${type} w-100`} onClick={onClick}>
      <strong>{text}</strong>
    </button>
  );
};

export default Button;
