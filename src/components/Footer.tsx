import React from 'react';
import SocialBar from '~/src/components/SocialBar';
import Email from './Svg/Email';
import NyffinLogo from './Svg/NyffinLogo';

const Footer = () => {
	return (
		<React.Fragment>
			<div className="w-full bg-nyffinBlack text-white p-[10px]">
				<div className="max-w-[950px] m-auto px-5">
					<div className="pt-10 sm:pb-[70px]">
						<div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-items-center sm:justify-items-start gap-y-3">
							<NyffinLogo className="w-[120px] h-[45px]" />

							<SocialBar
								className="w-full max-w-[320px] sm:w-[320px] mb-[18px] sm:mb-0 sm:justify-self-end order-4 sm:order-2"
								iconClassName="h-[25px] w-[25px]"
							/>

							<Email className="order-3 my-[20px] sm:my-0" />

							<div className="sm:justify-self-end font-alumniSans text-[30px] tracking-[2px] w-full max-w-[320px] sm:max-w-[380px] sm:min-w-[320px] flex justify-between flex-col sm:flex-row order-2 sm:order-4 my-[20px] sm:my-0">
								<a href="#about" className=" hover:underline">
									About
								</a>
								<span className="sm:w-[1px] sm:h-[28px] bg-white mt-2"></span>
								<a href="#teams" className=" hover:underline">
									Teams
								</a>
								<span className="sm:w-[1px] sm:h-[28px] bg-white mt-2"></span>
								<a href="#achievements" className=" hover:underline">
									Achievements
								</a>
							</div>
						</div>
					</div>
					<div className="flex flex-col sm:flex-row justify-between font-alumniSans border-t py-3 tracking-[1px] text-[17px]">
						<p className=" flex-grow">2022, FR - Nyffin Esports.</p>
						<p className=" pr-20">Design by @kooks</p>
						<p>Developped by @kooks & @maarc</p>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
