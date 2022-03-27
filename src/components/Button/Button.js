const Button = ({ className, action, children }) => {

	return (
		<button onClick={action} type="button" className={className}>
			{children}
		</button>
	);
};


export default Button