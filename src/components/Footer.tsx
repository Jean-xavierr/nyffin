import React from 'react';
import SocialBar from '~/src/components/SocialBar';
import NyffinLogo from './Svg/NyffinLogo';

const Footer = () => {
	return (
		<React.Fragment>
			<div className="w-full bg-nyffinBlack text-white">
				<div className="max-w-[950px] m-auto px-5">
					<div className="py-10">
						<div className="grid grid-cols-2 items-center gap-y-3">
							<NyffinLogo className="w-[100px] h-[40px]" />
							<SocialBar
								className="w-[300px] justify-self-end"
								iconClassName="h-[22px] w-[22px]"
							/>
							<p>nyffin.esport@gmail.com</p>
							<div className="justify-self-end font-alumniSans text-2xl w-[300px] flex justify-between">
								<a href="#about" className=" hover:underline">
									About
								</a>
								<span className="w-[1px] h-[22px] bg-white mt-1"></span>
								<a href="#teams" className=" hover:underline">
									Teams
								</a>
								<span className="w-[1px] h-[22px] bg-white mt-1"></span>
								<a href="#achievements" className=" hover:underline">
									Achievements
								</a>
							</div>
						</div>
					</div>
					<div className="flex justify-between font-alumniSans border-t py-2 tracking-[2px]">
						<p className=" flex-grow">2022, FR - Nyffin Esports.</p>
						<p className=" pr-20">Desgin by @kooks</p>
						<p>Developped by @kooks & @maarc</p>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
