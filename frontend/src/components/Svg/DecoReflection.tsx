import React, { FC } from 'react';

interface Props {
	className?: string;
}

const DecoReflection: FC<Props> = ({ className }) => {
	return (
		<svg
			width="515"
			height="450"
			viewBox="0 0 515 450"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M-0.499994 31L-0.500177 1.99978L386.233 228.786L370.714 255.002L-0.499994 31Z"
				fill="url(#paint0_linear_328_224)"
				fill-opacity="0.14"
			/>
			<path
				d="M2.00029 174L2.00023 70.5005L514.318 369.787L469.715 445.138L2.00029 174Z"
				fill="url(#paint1_linear_328_224)"
				fill-opacity="0.14"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_328_224"
					x1="-197.24"
					y1="-98.8962"
					x2="378.474"
					y2="241.89"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="white" />
					<stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
				</linearGradient>
				<linearGradient
					id="paint1_linear_328_224"
					x1="-83.6984"
					y1="66.676"
					x2="492.016"
					y2="407.462"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="white" />
					<stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
				</linearGradient>
			</defs>
		</svg>
	);
};

export default DecoReflection;
