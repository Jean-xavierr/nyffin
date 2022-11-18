import React from 'react';
import SectionTitle from '../components/SectionTitle';

const About = () => {
	return (
		<div className=" bg-nyffinBlack text-white">
			<SectionTitle
				title="About Nyffin"
				subtitle="Learn about us"
				backtext="About"
				mainColor="text-white"
				secondColor="text-nyffinRed"
			/>
			<div className="max-w-[1000px] m-auto">
				<p className="max-w-[600px] text-justify">
					Fondée officiellement en 2022, Nyffin est une organisation
					d'esport orienté réalité virtuelle (VR) et réalité augmentée (AR)
					en France. Vice-Champions de France de Hado 2022, et multiples
					fois vainqueurs de plusieurs tournois en réalité virtuelle (Tower
					Tag, Blaston, Eleven Assassin's), nous nous lançons dans l'esport
					compétitif avec force et détermination. Notre objectif est de
					promouvoir, faire découvrir et démocratiser les jeux aux
					technologies innovantes auprès de toutes et tous en devenant la
					principale organisation d'esports orientée VR/AR de France.
				</p>
				<p className="font-anton">LE SPORT VIRTUEL</p>
				<p className="font-bebasNeue">DU FUTUR</p>
				<p className="max-w-[600px] text-justify">
					L'Esport VR/AR modifie la façon dont les joueurs interagissent :
					la compétition au plus haut niveau devient une véritable activité
					physique, cela se rapproche plus du sport traditionnel qu'à des
					titres d'esports classique. Cette discipline en plein essort ne
					ressemble à rien de ce que nous avons pu voir auparavant dans le
					monde du jeu vidéo. Les joueurs ne sont plus assis à des bureaux
					à regarder des écrans. Ils interagissent désormais avec des
					mondes et des environnements virtuels de la même manière que les
					athlètes traditionnels le font.
				</p>
			</div>
		</div>
	);
};

export default About;
