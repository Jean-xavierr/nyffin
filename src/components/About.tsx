import React from 'react';
import SectionTitle from './SectionTitle';
import SocialBar from './SocialBar';
import SvgDiscord from './Svg/Discord';
import NyffinDiscordImg from '~/assets/img/nyffin_mascot_watermark.jpg';
import ExternalLinkIcon from './Svg/ExternalLinkIcon';
import DecoReflection from './Svg/DecoReflection';

const About = () => {
	const stats = [
		{ num: '2022', text: 'SINCE' },
		{ num: '2', text: 'TEAMS' },
		{ num: '5', text: 'PLAYERS' },
	];
	return (
		<div className="w-[100%] text-white bg-nyffinBlack sm:bg-transparent sm:about-skewed-bg relative mb-[200px] mt-[-200px] pt-[300px] pb-[150px] sm:pb-0">
			<DecoReflection className="absolute bottom-[50px] left-0" />
			<SectionTitle
				title="About Nyffin"
				subtitle="Learn about us"
				backtext="About"
				mainColor="text-white"
				secondColor="text-nyffinRed"
				backtextColor="text-[#424242]"
				placement=" right-[50%]"
				id="about"
			/>
			<div className="max-w-[850px] m-auto px-[30px]">
				<div className="select-none max-w-[800px] m-auto flex justify-around py-[80px]">
					{stats.map((stat) => {
						return (
							<div
								key={stat.text}
								className="min-w-[150px] inline-block font-bold"
							>
								<p className="text-[80px] leading-[60px] text-center">
									{stat.num}
								</p>
								<p className="text-[20px] text-center">{stat.text}</p>
							</div>
						);
					})}
				</div>

				<div className="relative grid grid-cols-1 my-[50px] gap-[20px]">
					<p className="relative z-20 max-w-[550px] text-justify py-[40px] text-[18px]">
						Fondée officiellement en 2022, Nyffin est une{' '}
						<b>
							organisation d'esport orientée réalité virtuelle (VR) et
							réalité augmentée (AR) en France
						</b>
						. Vice-Champions de France de Hado 2022, et multiples fois
						vainqueurs de plusieurs tournois en réalité virtuelle (Tower
						Tag, Blaston, Eleven Assassin's), nous nous lançons dans
						l'esport compétitif avec force et détermination. Notre
						objectif est de{' '}
						<b>promouvoir, faire découvrir et démocratiser</b> les jeux
						aux technologies innovantes auprès de toutes et tous en
						devenant la principale organisation d'esports orientée VR/AR
						de France.
					</p>

					{/* Image */}
					<div className="relative mx-auto md:absolute md:right-0 md:m-5 mb-[-70px]">
						<div className="relative w-[250px] h-[250px] bg-gray-500 z-10"></div>
						<span
							className="absolute top-[15px] left-[18px] block bg-nyffinRed w-[250px] h-[250px] z-0"
							aria-hidden="true"
						></span>
					</div>

					<div className="max-w-[350px] grid grid-cols-1 gap-0 sm:ml-[80px] pt-[40px] z-10">
						<p className="font-anton text-4xl">LE SPORT VIRTUEL</p>
						<p className="justify-self-end font-bebasNeue text-[60px] sm:text-[80px] text-outline tracking-[.10em] leading-[70px] ">
							DU FUTUR
						</p>
					</div>

					<p className="max-w-[550px] text-justify justify-self-end py-[50px] sm:py-[20px] text-[18px]">
						L'Esport VR/AR modifie la façon dont les joueurs interagissent
						: la <b>compétition au plus haut niveau</b> devient une
						véritable
						<b>activité physique</b>, cela se rapproche plus du sport
						traditionnel qu'à des titres d'esports classique. Cette
						discipline en plein essort ne ressemble à rien de ce que nous
						avons pu voir auparavant dans le monde du jeu vidéo. Les
						joueurs ne sont plus assis à des bureaux à regarder des
						écrans. Ils{' '}
						<b>
							interagissent désormais avec des mondes et des
							environnements virtuels
						</b>{' '}
						de la même manière que les athlètes traditionnels le font.
					</p>
				</div>
				<p className="uppercase font-alumniSans text-[25px] tracking-[2px] text-center sm:pt-[130px]">
					Suivez l'actualité de Nyffin sur les réseaux
				</p>
				<SocialBar
					className="max-w-[340px] m-auto mt-[10px]"
					iconClassName="h-[30px] w-[30px]"
				/>
			</div>

			{/* DISCORD BUTTON */}
			<div className="absolute bottom-[-70px] left-[50%] translate-x-[-50%] sm:relative sm:bottom-0">
				<p className="block sm:hidden uppercase text-[12px] tracking-[2px] text-center mx-auto mt-[100px] mb-[-10px]">
					Actus VR, évènements gaming ...
				</p>
				<a
					href="https://discord.gg/JFV3K9GCjB"
					target="_blank"
					className="w-[280px] my-[20px] mx-auto relative sm:absolute sm:left-[10%] sm:bottom-[-200px] sm:w-[370px] rounded-[4px] p-[10px] bg-nyffinRed text-white flex items-center justify-between flex-wrap sm:flex-nowrap hover:transition-all hover:scale-105"
				>
					<ExternalLinkIcon className="w-[18px] h-[18px] absolute right-[4px] top-[6px]" />
					{/* <img
						src={NyffinDiscordImg}
						alt="Nyffin logo"
						className="object-cover w-[90px] h-[90px] rounded-[4px]"
					/> */}
					<div className="bg-nyffinGray w-[90px] h-[90px] rounded-[4px] flex-shrink-0"></div>
					<div className="sm:text-center">
						<p className="sm:block hidden uppercase text-[12px] tracking-[2px] my-[8px]">
							Actus VR, évènements gaming ...
						</p>
						<p className="w-[150px] sm:w-auto uppercase font-anton text-[18px] sm:text-[19px] tracking-[2px] leading-[28px] sm:leading-[15px]">
							Rejoins la communauté nyffin sur{' '}
							<SvgDiscord className="inline w-[28px] h-[33px] pt-[2px]" />
						</p>
					</div>
				</a>
			</div>
		</div>
	);
};

export default About;
