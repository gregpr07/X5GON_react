import React from 'react';
import './css/app.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Search from './Search';
import Homepage from './Homepage';
import Products from './Products';
import Team from './Team';

class App extends React.Component {
	render() {
		return (
			<Router>
				<Route path="/" exact component={Homepage} />
				<Route path="/products" component={Products} />
				<Route path="/search" exact component={Search} />
				<Route path="/team" exact component={Team} />
			</Router>
		);
	}
}

export default App;
