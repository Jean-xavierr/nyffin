import React, { FC } from 'react';
import SvgBurger from './Svg/Burger';
import Cross from './Svg/Cross';

interface Props {
	className?: string;
	display: boolean;
	toggleDisplay: () => void;
}

const Burger: FC<Props> = ({ className, display, toggleDisplay }) => {
	return (
		<div className={className} onClick={toggleDisplay}>
			{display ? <Cross /> : <SvgBurger />}
		</div>
	);
};

export default Burger;
