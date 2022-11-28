import React, { FC } from 'react';

interface Props {
	className?: string;
}

const ArrowDown: FC<Props> = ({ className }) => {
	return (
		<svg
			width="48"
			height="30"
			viewBox="0 0 48 30"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M5.64 0L24 18.32L42.36 0L48 5.64L24 29.64L0 5.64L5.64 0Z"
				fill="white"
				fillOpacity="0.79"
			/>
		</svg>
	);
};

export default ArrowDown;
