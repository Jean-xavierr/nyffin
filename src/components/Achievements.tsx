import React from 'react';
import SectionTitle from './SectionTitle';
import Medal from './Svg/Medal';
import PlayButton from './Svg/PlayButton';
import Trophy from './Svg/Trophy';
import AchievementsData from '~/config/achievements-data';

const Achievements = () => {
	const rank_suffix = ['st', 'nd', 'rd', 'th'];
	const rank_color = [
		'text-[#FFDC82]',
		'text-[#B4B4B4]',
		'text-[#C07300]',
		'text-[#D8D8D8]',
	];

	const get_rank_color = (rank: number) => {
		if (rank < 4 && rank != 0) return rank_color[rank - 1];
		else return rank_color[3];
	};
	const date_format = (date: string) => {
		let first_line = 'AS OF';
		let second_line = 'NOW';
		if (date != '') {
			first_line = date.slice(0, date.lastIndexOf('.'));
			second_line = date.slice(date.lastIndexOf('.') + 1);
		}
		return (
			<div className="min-w-[55px] text-[20px] text-center">
				<p className={date == '' ? 'text-[18px]' : ''}>{first_line}</p>
				<p
					className={
						'font-bold text-[22px] mt-[-10px] ' +
						(date == '' && 'text-nyffinRed')
					}
				>
					{second_line}
				</p>
			</div>
		);
	};

	return (
		<div className="mt-[150px] mb-[250px]">
			<SectionTitle
				title="All our achievements"
				subtitle="???????????????????"
				backtext="Achievements"
				mainColor="text-white"
				secondColor="text-nyffinBlack"
				backtextColor="text-black/[.35]"
				placement="top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
				className="before:block before:absolute before:-inset-0 before:skew-y-[8deg] before:bg-nyffinRed "
			/>

			<p className="mx-[50px] my-[100px] text-center text-[18px]">
				Depuis 2021, tant dans la réalité virtuelle que dans la réalité
				augmentée, nos équipes ont remporté plusieurs prix
				<br /> avec l'ambition d'en gagner d'autres.
			</p>
			<div className="max-w-[800px] m-auto border-y divide-y">
				{AchievementsData.map((achievement, id) => {
					return (
						<div
							key={id}
							className="flex flex-row py-[5px] items-center gap-[40px]"
						>
							<div className="flex items-center gap-3 min-w-[100px]">
								{achievement.rank < 4 && achievement.rank != 0 ? (
									<Trophy
										className={
											'w-[40px] h-[40px] ' +
											get_rank_color(achievement.rank)
										}
									/>
								) : (
									<Medal
										className={
											'w-[35px] h-[35px] mx-[2.5px] ' +
											get_rank_color(achievement.rank)
										}
									/>
								)}
								<p
									className={
										'text-[20px] ' +
										(achievement.rank == 0
											? 'italic ml-[-4px] text-[18px]'
											: '')
									}
								>
									{achievement.rank != 0
										? achievement.rank +
										  rank_suffix[
												achievement.rank < 5
													? achievement.rank - 1
													: 3
										  ]
										: 'TBD'}
								</p>
							</div>
							{date_format(achievement.date)}
							<div className="text-[20px]" style={{ flexBasis: '70%' }}>
								{achievement.event_name}
							</div>
							<div className="w-[35px]">
								{achievement.url != '' && (
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
