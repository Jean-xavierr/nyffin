import React from 'react';
import Footer from '~/src/components/Footer';
import About from './About';
import Teams from '../components/Teams';

const Home = () => {
	return (
		<React.Fragment>
			<div>Home</div>
			<About />
			<Teams />
			<Footer />
		</React.Fragment>
	);
};

export default Home;
