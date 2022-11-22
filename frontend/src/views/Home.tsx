import React from 'react';
import Footer from '~/src/components/Footer';
import About from './About';
import Teams from '../components/Teams';
import Achievements from '../components/Achievements';

const Home = () => {
	return (
		<React.Fragment>
			<div>Home</div>
			<About />
			<Teams />
			<Achievements />
			<Footer />
		</React.Fragment>
	);
};

export default Home;
