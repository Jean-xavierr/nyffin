import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import Burger from './Svg/Burger';
import NyffinLogo from './Svg/NyffinLogo';

const Nav = () => {
	const links = ['About', 'Teams', 'Achievements'];
	const [displayMenu, setDisplayMenu] = useState(false);

	const toggleDisplayMenu = () => setDisplayMenu((oldValue) => !oldValue);

	useEffect(() => {
		if (!displayMenu) document.body.style.overflow = 'unset';
		else document.body.style.overflow = 'hidden';
	}, [displayMenu]);

	return (
		<div
			id="nav"
			className=" transition-[background-color] duration-[.2s] ease-in-out w-full px-[50px] py-[0px] fixed z-50 flex justify-center sm:justify-between items-center text-white font-alumniSans text-[25px] font-medium tracking-[2px] uppercase"
		>
			<Burger
				display={displayMenu}
				className={
					'absolute top-[23px] sm:hidden z-50 right-[20px] cursor-pointer'
				}
				toggleDisplay={toggleDisplayMenu}
			></Burger>
			{displayMenu && <Menu toggleDisplay={toggleDisplayMenu} />}
			<NyffinLogo className="w-[120px] h-[60px] sm:basis-[50%] mt-[3px]" />
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
