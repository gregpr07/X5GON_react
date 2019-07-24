import React from 'react';
import './css/app.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Search from './Search';
import Homepage from './Homepage';

class App extends React.Component {
	render() {
		return (
			<Router>
				<Route path="/" exact component={Homepage} />
				<Route path="/search" exact component={Search} />
			</Router>
		);
	}
}

export default App;
