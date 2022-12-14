import React, { FC } from 'react';

interface Props {
	className?: string;
}

const PlayButton: FC<Props> = ({ className }) => {
	return (
		<svg
			width="17"
			height="19"
			viewBox="0 0 17 19"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M16.1049 7.96587L2.7474 0.243722C1.6621 -0.383401 0 0.225169 0 1.77628V17.2169C0 18.6084 1.54446 19.447 2.7474 18.7494L16.1049 11.031C17.2965 10.3445 17.3003 8.65237 16.1049 7.96587Z"
				fill="#910A0A"
			/>
		</svg>
	);
};

export default PlayButton;
