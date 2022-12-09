import React from 'react';
import ArrowDown from './Svg/ArrowDown';
import DecoDots from './Svg/DecoDots';
import NyffinMascot from './Svg/NyffinMascot';

const Landing = () => {
	return (
		<div className="pt-[100px] landing-skewed-bg relative w-[100%] z-40 pb-[100px] flex justify-center items-start">
			<div className="relative inline-block m-auto w-full max-w-[1565px]">
				{/* PLAY TO WIN */}
				<div className="text-white font-alumniSans absolute top-[75%] min-[980px]:top-[24%] left-[-38px] min-[980px]:left-[-20px] text-[7vw] min-[980px]:text-[40px] tracking-[4px] opacity-[0.3] rotate-[-90deg]">
					play to win
					<span className=" block absolute h-[2px] w-[30%] bg-white right-[-35%] bottom-[30%]"></span>
					<span className="block absolute h-[4px] w-[4px] rounded-[4px] bg-white right-[-42%] bottom-[25%] min-[980px]:bottom-[28%]"></span>
				</div>

				<div className="flex flex-col min-[980px]:flex-row justify-center min-[980px]:pt-[50px] lg:px-[20px]">
					{/* FUTURE */}
					<div className="sm:pt-[22px] min-[980px]:order-2 w-full m-auto relative px-[15px] max-w-[1030px] min-[980px]:m-0 min-[980px]:ml-[-220px]">
						<div className="inline relative">
							<p className="relative inline-block font-bebasNeue text-white text-outline outline-4 text-[15vw] min-[980px]:text-[min(8vw,110px)] tracking-[5px] min-[980px]:tracking-[.145em] min-[980px]:leading-[min(8vw,110px)] leading-none">
								THE FUTURE OF
							</p>
							<span
								aria-hidden="true"
								className="block absolute bg-white h-[2px] w-[100%] min-[980px]:w-[calc(100%-15px)] bottom-[-10px] min-[980px]:bottom-[-15px]"
							></span>
						</div>
						<p className="text-white font-anton text-right text-[13vw] tracking-[2px] min-[980px]:text-[min(120px,8vw)] min-[980px]:leading-[min(120px,8vw)] min-[980px]:tracking-[5px] min-[980px]:mt-[20px] leading-none mt-[15px]">
							VIRTUAL REALITY
						</p>
					</div>

					<NyffinMascot className="w-full h-full mx-auto min-[980px]:mx-initial min-[980px]:w-auto min-[980px]:h-auto max-w-[650px] px-[35px] py-[10px] min-[980px]:p-0 min-[980px]:max-w-[650px] min-[980px]:mt-[70px] z-10 min-[980px]:order-1" />

					<DecoDots
						className="text-white min-[980px]:ml-[-100px] min-[980px]:mt-[200px] absolute right-[0px] w-[30vw] min-[980px]:w-[min(15vw,205px)]"
						opacity="0.29"
					/>

					<div className="min-[980px]:absolute min-[980px]:bottom-[20%] min-[980px]:right-[10%] text-right">
						<div className="relative inline-block text-white font-alumniSans text-[22px] sm:text-[35px] tracking-[3px] mr-[40px] sm:mr-[100px]">
							ESPORT TEAM
							<span className="absolute h-[40px] w-[40px] sm:h-[60px] sm:w-[60px] bg-white opacity-[0.15] right-[-13%] top-[-15%]"></span>
						</div>
					</div>
				</div>

				<a href="#about">
					<ArrowDown className="mx-auto h-[25px] w-[25px] sm:w-[48px] sm:h-[30px]  mt-[30px] min-[980px]:mt-[-100px]" />
				</a>
			</div>
		</div>
	);
};

export default Landing;
