import PropTypes from 'prop-types';

function Button({ 
	text, 
	href, 
	variant = "outline", // outline or solid
	size = "md", // sm, md, or lg
	className = "",
	...props 
}) {
	const baseStyles = "inline-flex items-center justify-center font-mono relative group";
	
	const variants = {
		outline: `
			text-accent border border-accent rounded
			hover:bg-accent/10
			before:absolute before:inset-0 before:rounded before:border before:border-accent/0
			before:transition-all before:duration-300 hover:before:scale-110 hover:before:border-accent/10
		`,
		solid: `
			text-navy bg-accent rounded
			hover:bg-accent/90 hover:translate-y-[-2px]
			transition-all duration-300
		`,
		minimal: `
			text-accent p-0
			hover:text-accent/80
			transition-colors duration-300
		`
	};

	const sizes = {
		sm: "px-4 py-2 text-sm",
		md: "px-6 py-3 text-base",
		lg: "px-8 py-4 text-base"
	};

	return (
		<a
			href={href}
			className={`
				${baseStyles} 
				${variants[variant]} 
				${variant !== 'minimal' ? sizes[size] : ''} 
				${className}
			`}
			{...props}
		>
			{text}
		</a>
	);
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	href: PropTypes.string,
	variant: PropTypes.oneOf(['outline', 'solid', 'minimal']),
	size: PropTypes.oneOf(['sm', 'md', 'lg']),
	className: PropTypes.string
};

export default Button;
