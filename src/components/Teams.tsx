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
				placement=" left-[50%]"
				id="teams"
			/>

			<div className="relative flex justify-between m-[50px]">
				<DecoDots className="absolute top-[-130px] left-[-80px]" />
				{teams.map((team, id) => {
					return (
						<div
							key={id}
							className="relative w-[300px] h-[500px] grayscale hover:grayscale-0 grid grid-cols-1 items-center justify-items-center"
						>
							<img
								className={
									'absolute top-0 w-[300px] h-[500px] object-cover ' +
									team.img_position
								}
								src={team.img}
							/>
							<img src={team.logo} className="relative" />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Teams;
