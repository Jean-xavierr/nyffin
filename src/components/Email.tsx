import React, { FC, useState } from 'react';
import { EmailIcon, OpenEmailIcon } from './Svg/EmailIcons';

interface Props {
	className?: string;
}

const Email: FC<Props> = ({ className }) => {
	const emailAddress = 'nyffin.esport@gmail.com';
	const [isHovering, setIsHovering] = useState(false);
	const [showCopyToast, setShowCopyToast] = useState(false);
	const [timer, setTimer] = useState<number>(0);

	const handleMouseOver = () => {
		setIsHovering(true);
	};

	const handleMouseOut = () => {
		setIsHovering(false);
	};

	const copyEmailToClipboard = () => {
		try {
			navigator.clipboard.writeText(emailAddress);
			setShowCopyToast(true);

			clearTimeout(timer);
			setTimer(
				setTimeout(() => {
					setShowCopyToast(false);
				}, 1500)
			);
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div
			className={className + ' relative flex items-center cursor-pointer'}
			onClick={copyEmailToClipboard}
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
		>
			<span
				className={
					(showCopyToast ? ' block ' : ' hidden ') +
					'flex animate-bounce justify-center items-center absolute right-[30%] bottom-10 py-1 px-4 bg-nyffinRed rounded-md text-lg after:absolute after:top-[99%] after:left-[calc(50% - 10px)] after:border-t-[10px] after:border-t-nyffinRed after:border-l-[10px] after:border-l-transparent after:border-r-[10px] after:border-r-transparent '
				}
				aria-hidden="true"
			>
				Copied !
			</span>
			{isHovering ? <OpenEmailIcon /> : <EmailIcon />}
			<p className="text-[22px] ml-2">{emailAddress}</p>
		</div>
	);
};

export default Email;
