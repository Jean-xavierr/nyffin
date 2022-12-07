import React from 'react';
import ArrowDown from './Svg/ArrowDown';
import DecoDots from './Svg/DecoDots';
import NyffinMascot from './Svg/NyffinMascot';

const Landing = () => {
	return (
		<div className="pt-[100px] landing-skewed-bg relative w-[100%] z-40 pb-[100px] flex justify-center items-start">
			<div className="relative inline-block m-auto">
				<div className="text-white font-alumniSans absolute top-[75%] md:top-[24%] left-[-38px] md:left-[-60px] text-[7vw] md:text-[40px] tracking-[4px] opacity-[0.3] rotate-[-90deg]">
					play to win
					<span className=" block absolute h-[2px] w-[30%] bg-white right-[-35%] bottom-[30%]"></span>
					<span className="block absolute h-[4px] w-[4px] rounded-[4px] bg-white right-[-42%] bottom-[25%] md:bottom-[28%]"></span>
				</div>

				<div className="flex flex-col md:flex-row justify-center md:pt-[100px]">
					{/* FUTURE */}
					<div className="sm:pt-[22px] md:order-2 w-full relative px-[15px] md:w-[1030px] lg:ml-[-220px]">
						<div className="inline relative">
							<p className="relative inline-block font-bebasNeue text-white text-outline outline-4 text-[15vw] md:text-[110px] tracking-[5px] md:tracking-[15px] md:leading-[110px] leading-none">
								THE FUTURE OF
							</p>
							<span
								aria-hidden="true"
								className="block absolute bg-white h-[2px] w-[100%] md:w-[calc(100%-15px)] bottom-[-10px] md:bottom-[-15px]"
							></span>
						</div>
						<p className="text-white font-anton text-right text-[13vw] tracking-[2px] md:text-[120px] md:tracking-[5px] md:leading-[120px] md:mt-[20px] leading-none mt-[15px]">
							VIRTUAL REALITY
						</p>
					</div>

					<NyffinMascot className="block w-full h-full px-[35px] py-[10px] md:p-0 md:max-w-[650px] md:mt-[70px] z-10 md:order-1" />

					<DecoDots
						className="text-white sm:ml-[-100px] sm:mt-[200px] md:order-3 absolute right-[-50px] w-[30vw] md:relative md:w-[205px] md:right-auto"
						opacity="0.29"
					/>
					<div className="md:absolute md:bottom-[20%] md:right-[10%] text-right">
						<div className="relative inline-block text-white font-alumniSans text-[22px] sm:text-[35px] tracking-[3px] mr-[40px] sm:mr-[100px]">
							ESPORT TEAM
							<span className="absolute h-[40px] w-[40px] sm:h-[60px] sm:w-[60px] bg-white opacity-[0.15] right-[-13%] top-[-15%]"></span>
						</div>
					</div>
				</div>

				<a href="#about">
					<ArrowDown className="mx-auto h-[25px] w-[25px] sm:w-[48px] sm:h-[30px]  mt-[30px] md:mt-[-100px]" />
				</a>
			</div>
		</div>
	);
};

export default Landing;
