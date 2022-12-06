import React from 'react';
import SectionTitle from './SectionTitle';
import DecoDots from './Svg/DecoDots';

const Teams = () => {
	const teams = [
		{
			game: 'Hado',
			img: '/assets/img/hado_img.jpg',
			logo: '/assets/img/hado_logo.png',
			img_style: 'sm:hado brightness-[0.9] sm:brightness-100',
		},
		{
			game: 'Ultimechs',
			img: '/assets/img/ultimechs_img.png',
			logo: '/assets/img/ultimechs_logo.png',
			img_style: 'ultimechs brightness-[0.9] sm:brightness-100',
		},
		{
			game: 'Echo Arena',
			img: '/assets/img/echo_arena_img.jpg',
			logo: '/assets/img/echo_arena_logo.png',
			img_style: 'object-top sm:brightness-[1.3] group-hover:brightness-100',
		},
		{
			game: 'Battle Arena',
			img: '/assets/img/battle_arena_img.png',
			logo: '/assets/img/battle_arena_logo.png',
			img_style:
				'eva sm:eva_sm lg:object-center sm:brightness-[2] group-hover:brightness-120',
		},
	];

	return (
		<div className="max-w-[1400px] m-auto pb-[100px] relative">
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
			<DecoDots className="absolute top-[150px] left-[20px] sm:left-[-80px] w-[120px] h-[120px] sm:w-[200px] sm:h-[200px]" />
			<div className="relative w-full grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:p-[30px] mt-[50px]">
				{teams.map((team, id) => {
					return (
						<div
							key={id}
							className="group relative w-full h-[160px] sm:h-[calc(50vw-60px-16px)] lg:max-w-[300px] lg:h-[500px] sm:grayscale hover:grayscale-0 grid grid-cols-1 items-center justify-items-center"
						>
							<img
								className={
									'absolute w-full h-full lg:max-w-[300px] lg:h-[500px] object-cover ' +
									team.img_style
								}
								src={team.img}
							/>
							<img
								src={team.logo}
								className="relative px-[20px] max-w-[300px] lg:w-full"
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Teams;
