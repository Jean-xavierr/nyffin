import React, { useState } from 'react';
import NyffinLogo from './Svg/NyffinLogo';

const Nav = () => {
	return (
		<div className="w-full px-[50px] py-[0px] fixed z-50 bg-nyffinBlack flex justify-between items-center  text-white font-alumniSans text-[22px] font-medium tracking-[2px]">
			<NyffinLogo
				className="w-[80px] h-[45px]"
				style={{ flexBasis: '40%' }}
			/>
			<div className="flex justify-between w-[350px] mx-[20px]">
				<a href="" className="hover:underline">
					About
				</a>
				<a href="" className="hover:underline">
					Teams
				</a>
				<a href="" className="hover:underline">
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
