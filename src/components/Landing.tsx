import React from 'react';
import ArrowDown from './Svg/ArrowDown';
import DecoDots from './Svg/DecoDots';
import NyffinMascot from './Svg/NyffinMascot';

const Landing = () => {
	return (
		<div className="z-[20]s pt-[100px] landing-skewed-bg relative w-[100%] z-40 pb-[100px] flex justify-center items-start">
			<div className="m-auto relative inline-block">
				<div className="absolute top-[27%] left-[-60px] text-white font-alumniSans text-[40px] tracking-[4px] opacity-[0.4]  before:block before:absolute before:h-[2px] before:w-[30%] before:bg-white before:right-[-35%] before:bottom-[18px] after:block after:absolute after:h-[4px] after:w-[4px] after:rounded-[4px] after:bg-white after:right-[-42%] after:bottom-[17px] rotate-[-90deg]">
					hello there
				</div>
				<div className="flex justify-center pt-[100px]">
					<NyffinMascot className="block mt-[70px] z-10" />
					<div className="pt-[50px] ml-[-230px]">
						<p className="relative inline-block font-bebasNeue text-[110px] text-white text-outline tracking-[15px] leading-[60px] before:block before:absolute before:bg-white before:h-[2px] before:w-[calc(100%-15px)] before:bottom-[-20px]">
							THE FUTURE OF
						</p>
						<p className="font-anton text-[120px] text-white tracking-[5px] ml-[230px]">
							VIRTUAL REALITY
						</p>
					</div>
					<DecoDots
						className="text-white ml-[-100px] mt-[200px]"
						opacity="0.29"
					/>
				</div>
				<span className="absolute right-[15%] top-[70%] text-white font-alumniSans text-[35px] tracking-[3px] before:block before:absolute before:h-[60px] before:w-[60px] before:bg-white before:opacity-[0.15] before:right-[-30px] before:top-[-8px]">
					ESPORT TEAM
				</span>
				<a href="#about">
					<ArrowDown className="mx-auto mt-[-100px]" />
				</a>
			</div>
		</div>
	);
};

export default Landing;
