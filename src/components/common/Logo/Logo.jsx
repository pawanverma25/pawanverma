import PropTypes from 'prop-types';

function Logo({ className }) {
	return (
		<svg 
			className={className}
			viewBox="0 0 100 100"
		>
			<path
				fill="currentColor"
				d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 80C27.9 80 10 62.1 10 40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"
			/>
			<text
				x="50%"
				y="50%"
				textAnchor="middle"
				dy=".3em"
				className="text-2xl font-mono"
				fill="currentColor"
			>
				P
			</text>
		</svg>
	);
}

Logo.propTypes = {
	className: PropTypes.string
};

export default Logo;
