import React, { useState } from 'react';
import Menu from './Menu';
import Burger from './Svg/Burger';
import NyffinLogo from './Svg/NyffinLogo';

const Nav = () => {
	const links = ['About', 'Teams', 'Achievements'];
	const [displayMenu, setDisplayMenu] = useState(false);

	const toggleDisplayMenu = () => {
		setDisplayMenu(!displayMenu);
		if (displayMenu) document.body.style.overflow = 'unset';
		else document.body.style.overflow = 'hidden';
	};

	return (
		<div className="bg-nyffinRed w-full px-[50px] py-[10px] fixed z-50 flex justify-center sm:justify-between items-center text-white font-alumniSans text-[25px] font-medium tracking-[2px] uppercase">
			<Burger
				display={displayMenu}
				className={
					'absolute top-[23px] sm:hidden z-50 ' +
					(displayMenu ? 'right-[20px]' : 'left-[20px]')
				}
				toggleDisplay={toggleDisplayMenu}
			></Burger>
			<Menu
				className={displayMenu ? '' : 'hidden'}
				toggleDisplay={toggleDisplayMenu}
			/>
			<NyffinLogo className="w-[120px] h-[60px] sm:basis-[50%]" />
			<div className="hidden sm:flex justify-between w-[400px] mx-[20px]">
				{links.map((link, id) => {
					return (
						<a
							key={id}
							href={'#' + link.toLowerCase()}
							className="hover:underline"
						>
							{link}
						</a>
					);
				})}
			</div>
			{/* <div className="flex">
				<a href="" className="hover:underline">
					FR
				</a>
				<a href="" className="ml-[20px] hover:underline">
					EN
				</a>
			</div> */}
		</div>
	);
};

export default Nav;
