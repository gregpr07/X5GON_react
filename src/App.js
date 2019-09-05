import React from 'react';
import './css/app.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Footer, DisplayWidth } from './Components';
import ScrollToTop from 'react-router-scroll-top';

import Search from './Search';
import Homepage from './Homepage';
import Products from './Products';
import Team from './Team';
import Privacy from './Privacy';
import Feed from './products/Feed';
import Discovery from './products/Discovery';
import Recommend from './products/Recommend';
import Join from './Join';
import Policy from './Policy';

class App extends React.Component {
	render() {
		return (
			<Router>
				<ScrollToTop>
					<DisplayWidth />
					<Route path="/" exact component={Homepage} />
					<Route path="/products" exact component={Products} />
					<Route path="/search" exact component={Search} />
					<Route path="/team" exact component={Team} />
					<Route path="/privacy" exact component={Privacy} />
					<Route path="/Policy" exact component={Policy} />
					<Route path="/join" exact component={Join} />
					{/* PRODUCTS */}
					<Route path="/products" exact>
						<Route path="/products/feed" exact component={Feed} />
						<Route path="/products/discovery" exact component={Discovery} />
						<Route path="/products/recommend" exact component={Recommend} />
					</Route>

					<Footer />
				</ScrollToTop>
			</Router>
		);
	}
}

export default App;
