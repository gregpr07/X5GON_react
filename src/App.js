import React from 'react';
import './css/app.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Footer } from './Components';
import ScrollToTop from 'react-router-scroll-top';

import Search from './Search';
import Homepage from './Homepage';
import Products from './Products';
import Team from './Team';
import Feed from './Feed';
import Privacy from './Privacy';
import Discovery from './products/Discovery';

class App extends React.Component {
	render() {
		return (
			<Router>
				<ScrollToTop>
					<Route path="/" exact component={Homepage} />
					<Route path="/products" exact component={Products} />
					<Route path="/search" exact component={Search} />
					<Route path="/team" exact component={Team} />
					<Route path="/products/feed" exact component={Feed} />
					<Route path="/privacy" exact component={Privacy} />
					<Route path="/products/discovery" exact component={Discovery} />
					<Footer />
				</ScrollToTop>
			</Router>
		);
	}
}

export default App;
