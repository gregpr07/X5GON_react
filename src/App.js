import React from 'react';
import './css/app.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Search from './Search';
import Homepage from './Homepage';
import Products from './Products';
import Team from './Team';
import Feed from './Feed';
import Privacy from './Privacy';

class App extends React.Component {
	render() {
		return (
			<Router>
				<Route path="/" exact component={Homepage} />
				<Route path="/products" component={Products} />
				<Route path="/search" exact component={Search} />
				<Route path="/team" exact component={Team} />
				<Route path="/feed" exact component={Feed} />
				<Route path="/privacy" exact component={Privacy} />
			</Router>
		);
	}
}

export default App;
