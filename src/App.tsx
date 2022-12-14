import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import Home from '~/src/views/Home';
// import NotFound from '~/src/views/NotFound';
import Nav from './components/Nav';

axios.defaults.baseURL = window.location.origin;

const App = () => {
	useEffect(() => {
		const handleScroll = (_event: any) => {
			// console.log('window.scrollY', window.scrollY);
			const nav = document.getElementById('nav');

			if (window.scrollY > 100) {
				if (nav) nav.style.backgroundColor = 'rgba(25,25,25,1)';
			} else {
				if (nav) nav.style.backgroundColor = 'rgba(25,25,25,0)';
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className="overflow-x-hidden relative">
			<Nav />
			<Home />
		</div>
		// <Router>
		//   <Switch>
		//     <Route exact path="/">
		//       <Home />
		//     </Route>
		//     <Route path="/about">
		//       <About />
		//     </Route>
		//     <Route>
		//       <NotFound />
		//     </Route>
		//   </Switch>
		// </Router>
	);
};

export default App;
