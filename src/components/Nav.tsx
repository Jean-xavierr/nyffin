import React, { useState } from 'react';
import NyffinLogo from './Svg/NyffinLogo';

const Nav = () => {
	return (
		<div className="w-full px-[50px] py-[10px] fixed z-50  flex justify-between items-center  text-white font-alumniSans text-[25px] font-medium tracking-[2px] uppercase">
			<NyffinLogo
				className="w-[120px] h-[60px]"
				style={{ flexBasis: '50%' }}
			/>
			<div className="flex justify-between w-[400px] mx-[20px]">
				<a href="#about" className="hover:underline">
					About
				</a>
				<a href="#teams" className="hover:underline">
					Teams
				</a>
				<a href="#achievements" className="hover:underline">
					Achievements
				</a>
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
