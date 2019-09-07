import { Component } from 'react';
import { withRouter } from 'react-router-dom';
/* import SmoothScroll from 'smooth-scroll'; */

class ScrollToTop extends Component {
	componentDidUpdate(prevProps) {
		if (
			this.props.location.hash === '#products' &&
			this.props.location !== prevProps.location
		) {
			/* const scroll = new SmoothScroll(); */
			const anchor = document.querySelector('#products');
			/* scroll.animateScroll(anchor); */

			anchor.scrollIntoView({ block: 'end' });
		} else if (this.props.location !== prevProps.location) {
			window.scrollTo(0, 0);
		}
	}

	render() {
		return this.props.children;
	}
}

export default withRouter(ScrollToTop);
