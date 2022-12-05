import React, { useState } from 'react';
import Menu from './Menu';
import NyffinLogo from './Svg/NyffinLogo';

const Nav = () => {
	const links = ['About', 'Teams', 'Achievements'];
	return (
		<div className="w-full px-[50px] py-[10px] fixed z-50  flex justify-between items-center  text-white font-alumniSans text-[25px] font-medium tracking-[2px] uppercase">
			{/* <Menu /> */}
			<NyffinLogo className="w-[120px] h-[60px] basis-[50%]" />
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
