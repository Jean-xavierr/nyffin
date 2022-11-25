import React from 'react';
import DecoDots from './Svg/DecoDots';
import NyffinMascot from './Svg/NyffinMascot';

const Landing = () => {
	return (
		<div className="bg-nyffinRed z-[20]s pt-[50px]">
			<div className="pt-[50px]">
				<p className=" inline-block pb-[10px] font-bebasNeue text-[100px] text-white text-outline tracking-[15px] leading-[60px]">
					THE FUTURE OF
				</p>
				<p className="font-anton text-[100px] text-white tracking-[5px]">
					VIRTUAL REALITY
				</p>
			</div>
			<NyffinMascot className="block" />
			<DecoDots />
		</div>
	);
};

export default Landing;
