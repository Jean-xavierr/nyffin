import React from 'react';
import SectionTitle from './SectionTitle';
import Medal from './Svg/Medal';
import PlayButton from './Svg/PlayButton';
import Trophy from './Svg/Trophy';

const Achievements = () => {
	const rank_suffix = ['st', 'nd', 'rd', 'th'];
	const achievements = [
		{
			rank: 1,
			date: '',
			event_name: 'Championnat de France',
			url: '',
		},
		{
			rank: 2,
			date: '05.07.2022',
			event_name: 'Championnat de France',
			url: 'https://tailwindcss.com/docs/translate',
		},
		{
			rank: 3,
			date: '05.07.2022',
			event_name: 'Championnat de France',
			url: '',
		},
		{
			rank: 4,
			date: '05.07.2022',
			event_name: 'Championnat de France',
			url: '',
		},
	];
	return (
		<div className="my-[100px]">
			<SectionTitle
				title="All our achievements"
				subtitle="???????????????????"
				backtext="Achievements"
				mainColor="text-white"
				secondColor="text-nyffinBlack"
				backtextColor="text-black/[.35]"
				placement="top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
				className="before:block before:absolute before:-inset-1 before:skew-y-[8deg] before:bg-nyffinRed "
			/>

			<p className="mx-[50px] my-[100px] text-center">
				Depuis 2021, tant dans la réalité virtuelle que dans la réalité
				augmentée, nos équipes ont remporté plusieurs prix
				<br /> avec l'ambition d'en gagner d'autres.
			</p>
			<div className="max-w-[900px] m-auto">
				{achievements.map((achievement, id) => {
					return (
						<div key={id} className="flex">
							<div className="flex">
								{achievement.rank < 4 ? <Trophy /> : <Medal />}
								<p>
									{achievement.rank +
										rank_suffix[achievement.rank - 1]}
								</p>
							</div>
							<div className="">
								{achievement.date == ''
									? 'AS OF NOW'
									: achievement.date}
							</div>
							<p className="block grow">{achievement.event_name}</p>

							<div>
								{achievement.url == '' ? (
									''
								) : (
									<a href={achievement.url} target="_blank">
										<PlayButton className="text-nyffinRed w-[30px] h-[30px]" />
									</a>
								)}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Achievements;
