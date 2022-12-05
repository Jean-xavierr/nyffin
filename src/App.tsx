import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import Home from '~/src/views/Home';
import NotFound from '~/src/views/NotFound';
import Nav from './components/Nav';

axios.defaults.baseURL = window.location.origin;

const App = () => {
	return (
		<div className=" overflow-x-hidden">
			<Nav />
			<Home />
		</div>
		// <Router>
		//
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
