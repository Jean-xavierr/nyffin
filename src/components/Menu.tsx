import React, { FC } from 'react';
import SocialBar from './SocialBar';
import Email from './Svg/Email';

interface Props {
	className?: string;
	toggleDisplay: () => void;
}

const Menu: FC<Props> = ({ className, toggleDisplay }) => {
	const links = ['About', 'Teams', 'Achievements'];

	return (
		<div
			className={
				'absolute bg-nyffinBlack w-screen h-screen top-0 left-0 flex flex-col items-center justify-around ' +
				className
			}
		>
			<div className="flex flex-col border-l-2 border-nyffinRed w-[250px] my-[100px]">
				{links.map((link, id) => {
					return (
						<a
							className="px-[20px] py-[10px]"
							href={'#' + link.toLowerCase()}
							key={id}
							onClick={toggleDisplay}
						>
							{link}
						</a>
					);
				})}
			</div>
			{/* <div className="flex">
				<a
					href=""
					className="relative after:w-[30px] after:h-[2px] after:absolute after:bg-nyffinRed after:bottom-[2px] after:left-[-3px]"
				>
					FR
				</a>
				<span className="w-[2px] h-[22px] bg-white mt-2 mx-[12px]"></span>
				<a href="" className="">
					EN
				</a>
			</div> */}
			<Email className="" />
			<SocialBar className="w-[300px] bottom-0" />
		</div>
	);
};

export default Menu;
