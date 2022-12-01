import React from 'react';
import SectionTitle from './SectionTitle';

import HadoLogo from '~/assets/img/hado_logo.png';
import HadoImg from '~/assets/img/hado_img.jpg';

import BattleArenaImg from '~/assets/img/battle_arena_img.png';
import BattleArenaLogo from '~/assets/img/battle_arena_logo.png';

import BlastonLogo from '~/assets/img/blaston_logo.png';
import BlastonImg from '~/assets/img/blaston_img.jpg';

import UltimechsLogo from '~/assets/img/ultimechs_logo.png';
import UltimechsImg from '~/assets/img/ultimechs_img.png';
import DecoDots from './Svg/DecoDots';

const Teams = () => {
	const teams = [
		{
			game: 'Hado',
			img: HadoImg,
			logo: HadoLogo,
			img_position: 'hado_position',
		},
		{
			game: 'Battle Arena',
			img: BattleArenaImg,
			logo: BattleArenaLogo,
			img_position: 'eva_position',
		},
		{
			game: 'Blaston',
			img: BlastonImg,
			logo: BlastonLogo,
			img_position: 'blaston_position',
		},
		{
			game: 'Ultimechs',
			img: UltimechsImg,
			logo: UltimechsLogo,
			img_position: '',
		},
	];
	return (
		<div className="max-w-[1400px] m-auto pb-[100px]">
			<SectionTitle
				mainColor="text-black"
				secondColor="text-nyffinRed"
				backtext="TEAMS"
				title="OUR TEAMS"
				subtitle="Discover our top players"
				backtextColor="text-nyffinGray"
				placement="sm:left-[50%] left-[100%] translate-x-[-100%] sm:translate-x-0"
				id="teams"
			/>

			<div className="relative flex flex-col gap-y-4 sm:flex-row justify-between sm:m-[50px] mt-[50px]">
				<DecoDots className="absolute top-[-70px] sm:top-[-130px] left-20px] sm:left-[-80px] w-[120px] h-[120px] sm:w-[200px] sm:h-[200px]" />
				{teams.map((team, id) => {
					return (
						<div
							key={id}
							className=" border-y relative w-full h-[200px] sm:w-[300px] sm:h-[500px] sm:grayscale hover:grayscale-0 grid grid-cols-1 items-center justify-items-center skew-y-[-8deg] sm:skew-y-0 overflow-hidden"
						>
							<img
								className={
									'absolute top-[20px]sm:top-0  w-full h-[120%] sm:w-[300px] sm:h-[500px] object-cover skew-y-[8deg] sm:skew-y-0 ' +
									team.img_position
								}
								src={team.img}
							/>
							<img
								src={team.logo}
								className="relative skew-y-[8deg] sm:skew-y-0"
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Teams;
