import React from 'react';
import './css/bootstrap.css';
import './css/components.css';
import './css/animate.css';
import { Navbar, MoreProducts, Footer } from './Components';

class Products extends React.Component {
	render() {
		return (
			<div className="bg-sky products">
				<Navbar />
				<MoreProducts homepage={true} />
				<Footer />
			</div>
		);
	}
}

export default Products;
