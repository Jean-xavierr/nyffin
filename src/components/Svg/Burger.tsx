import React, { FC } from 'react';

interface Props {
	className?: string;
	display: boolean;
	toggleDisplay: () => void;
}

const Burger: FC<Props> = ({ className, display, toggleDisplay }) => {
	if (display)
		return (
			<svg
				width="25"
				height="25"
				viewBox="0 0 25 25"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={className}
				onClick={toggleDisplay}
			>
				<path
					d="M25 2.51786L22.4821 0L12.5 9.98214L2.51786 0L0 2.51786L9.98214 12.5L0 22.4821L2.51786 25L12.5 15.0179L22.4821 25L25 22.4821L15.0179 12.5L25 2.51786Z"
					fill="white"
				/>
			</svg>
		);
	else {
		return (
			<svg
				width="30"
				height="20"
				viewBox="0 0 30 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={className}
				onClick={toggleDisplay}
			>
				<path
					d="M0 20H30V16.6667H0V20ZM0 11.6667H30V8.33333H0V11.6667ZM0 0V3.33333H30V0H0Z"
					fill="white"
				/>
			</svg>
		);
	}
};

export default Burger;
