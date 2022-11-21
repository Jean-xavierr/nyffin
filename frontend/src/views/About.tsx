import React from 'react';
import SectionTitle from '../components/SectionTitle';
import SocialBar from '../components/SocialBar';
import SvgDiscord from '../components/Svg/Discord';
import NyffinDiscordImg from '~/assets/img/nyffin_mascot_watermark.jpg';
import ExternalLinkIcon from '../components/Svg/ExternalLinkIcon';
import DecoReflection from '../components/Svg/DecoReflection';

const About = () => {
	const stats = [
		{ num: '2022', text: 'SINCE' },
		{ num: '2', text: 'TEAMS' },
		{ num: '5', text: 'PLAYERS' },
	];
	return (
		<div className="w-[100%] text-white about-skewed-bg relative mb-[200px] z-10">
			<DecoReflection className="absolute bottom-[50px] left-0" />
			<SectionTitle
				title="About Nyffin"
				subtitle="Learn about us"
				backtext="About"
				mainColor="text-white"
				secondColor="text-nyffinRed"
				backtextColor="text-[#424242]"
				placement=" right-[50%]"
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
					<div className="absolute right-0 m-5">
						<div className=" absolute  top-[-15px] left-[-18px] w-[250px] h-[250px] bg-gray-500"></div>
						<span
							className="block bg-nyffinRed w-[250px] h-[250px]"
							aria-hidden="true"
						></span>
					</div>
					<p className="relative z-10 max-w-[550px] text-justify py-[40px] text-[18px]">
						Fondée officiellement en 2022, Nyffin est une{' '}
						<b>
							organisation d'esport orienté réalité virtuelle (VR) et
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

					<div className="max-w-[350px] grid grid-cols-1 gap-0 ml-[80px] pt-[40px]">
						<p className="font-anton text-4xl">LE SPORT VIRTUEL</p>
						<p className="justify-self-end font-bebasNeue text-[80px] text-outline tracking-[.10em] leading-[70px] ">
							DU FUTUR
						</p>
					</div>
					<p className="max-w-[550px] text-justify justify-self-end py-[20px] text-[18px]">
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
				<p className="uppercase font-alumniSans text-[25px] tracking-[2px] text-center pt-[130px]">
					Suivez l'actualité de Nyffin sur les réseaux
				</p>
				<SocialBar
					className="max-w-[340px] m-auto mt-[10px]"
					iconClassName="h-[30px] w-[30px]"
				/>
			</div>
			{/* DISCORD BUTTON */}
			<a
				href="https://discord.gg/JFV3K9GCjB"
				target="_blank"
				className="absolute right-[70%] bottom-[-200px] max-w-[370px] rounded-[4px] p-[10px] bg-nyffinRed text-white flex items-center hover:transition-all hover:scale-105"
			>
				<img
					src={NyffinDiscordImg}
					alt="Nyffin logo"
					className="object-cover w-[90px] h-[90px] rounded-[4px]"
				/>
				<div>
					<ExternalLinkIcon className="w-[18px] h-[18px] absolute right-[5px] top-[5px]" />
					<p className="uppercase text-[12px] tracking-[2px] text-center my-[8px]">
						Actus VR, évènements gaming ...
					</p>
					<p className="uppercase font-anton text-[19px] tracking-[2px] text-center leading-[15px]">
						Rejoins la communauté nyffin sur{' '}
						<SvgDiscord className="inline w-[28px] h-[33px] pt-[2px]" />
					</p>
				</div>
			</a>
		</div>
	);
};

export default About;
