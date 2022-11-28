import React from 'react';
import Footer from '~/src/components/Footer';
import About from '../components/About';
import Teams from '../components/Teams';
import Achievements from '../components/Achievements';
import Landing from '../components/Landing';

const Home = () => {
	return (
		<React.Fragment>
			<Landing />
			<About />
			<Teams />
			<Achievements />
			<Footer />
		</React.Fragment>
	);
};

export default Home;
