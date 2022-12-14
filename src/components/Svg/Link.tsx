import React, { FC } from 'react';

interface Props {
	className?: string;
}

const Link: FC<Props> = ({ className }) => {
	return (
		<svg
			width="22"
			height="22"
			viewBox="0 0 22 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M14.0341 7.96603C16.6014 10.5359 16.5662 14.6562 14.0496 17.1867C14.0449 17.1918 14.0393 17.1974 14.0341 17.2026L11.1466 20.0901C8.59987 22.6368 4.45644 22.6365 1.91007 20.0901C-0.63669 17.5437 -0.63669 13.3998 1.91007 10.8535L3.50447 9.25913C3.92728 8.83631 4.65543 9.11733 4.67726 9.71485C4.7051 10.4763 4.84166 11.2414 5.09362 11.9802C5.17896 12.2304 5.11799 12.5071 4.93107 12.694L4.36874 13.2563C3.1645 14.4606 3.12673 16.4214 4.31911 17.6374C5.52327 18.8654 7.5025 18.8727 8.71589 17.6593L11.6034 14.7723C12.8147 13.5609 12.8097 11.603 11.6034 10.3968C11.4444 10.238 11.2842 10.1147 11.1591 10.0286C11.0705 9.96778 10.9974 9.88715 10.9456 9.7931C10.8938 9.69906 10.8647 9.5942 10.8605 9.4869C10.8435 9.03285 11.0044 8.56497 11.3632 8.20618L12.2679 7.30147C12.5051 7.06424 12.8772 7.03511 13.1523 7.22709C13.4674 7.44707 13.7624 7.69434 14.0341 7.96603V7.96603ZM20.0899 1.90994C17.5436 -0.636473 13.4001 -0.636817 10.8534 1.90994L7.96587 4.79743C7.96071 4.80259 7.95513 4.80817 7.9504 4.81333C5.43389 7.34384 5.39862 11.4641 7.96587 14.034C8.23755 14.3057 8.53261 14.5529 8.84763 14.7729C9.12272 14.9648 9.49491 14.9357 9.7321 14.6985L10.6368 13.7938C10.9956 13.435 11.1564 12.9671 11.1394 12.5131C11.1353 12.4058 11.1062 12.3009 11.0543 12.2069C11.0025 12.1128 10.9294 12.0322 10.8409 11.9714C10.7158 11.8852 10.5556 11.7619 10.3966 11.6032C9.19031 10.3969 9.18524 8.43902 10.3966 7.2277L13.2841 4.34063C14.4975 3.12724 16.4766 3.13454 17.6808 4.36254C18.8732 5.57856 18.8355 7.53939 17.6312 8.74363L17.0689 9.30596C16.882 9.49287 16.821 9.76959 16.9063 10.0198C17.1583 10.7586 17.2949 11.5236 17.3227 12.2851C17.3446 12.8826 18.0727 13.1636 18.4955 12.7408L20.0899 11.1464C22.6367 8.60016 22.6367 4.45626 20.0899 1.90994V1.90994Z"
				fill="#910A0A"
			/>
		</svg>
	);
};

export default Link;