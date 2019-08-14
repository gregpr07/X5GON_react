import React from 'react';
import './css/bootstrap.css';
import './css/components.css';
import './css/animate.css';
import { Navbar } from './Components';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

class Products extends React.Component {
	Products = () => {
		let contents = [
			{
				todo: 'Recommend',
				text: 'Show your content in a network of other sites',
				link: ''
			},
			{
				todo: 'Analytics',
				text: 'Understand the trends of your content usage',
				link: ''
			},
			{
				todo: 'Discovery',
				text: 'Search and find materials from all over the world',
				link: 'products/discovery'
			},
			{
				todo: 'Translate',
				text: 'Translate your content in every format',
				link: ''
			},
			{
				todo: 'Connect',
				text: 'Make your users connected to all other OER sites',
				link: ''
			},
			{
				todo: 'Feed',
				text: 'Provide data for all stakeholders',
				link: 'feed'
			}
		];
		return (
			<div className="bg-green p-4 products" id="products">
				<div className="maxer mx-auto">
					<div className="text-center">
						<div className="mx-auto text-ecosystem text-white">
							OUR PRODUCTS
						</div>
						<div className="px-2">
							<h1 className="py-4 solutions text-white">
								Solutions for all Needs
							</h1>
							<p className="description mx-auto mb-md-5">
								Powered by one content recommendation technology
							</p>
						</div>
						<div className="row p-2 pt-3">
							{contents.map((content, index) => {
								return (
									<div className="col-12 col-sm-6 col-md-4 px-3" key={index}>
										<div className="card bg-dark p-5 px-sm-3 mx-auto mb-4">
											<img
												className="mx-auto mb-3"
												src={'ecosystem.png'}
												width="75%"
												alt="ecosystem"
											/>
											<ScrollAnimation
												animateIn="fadeIn"
												animateOnce={true}
												className="h-100"
											>
												<h3 className="text-white">{content.todo}</h3>
												<p className="text-muted px-3 py-2">{content.text}</p>
												<div className="mt-auto">
													{content.link ? (
														<Link to={content.link}>
															<div className="button-green mx-auto mt-auto">
																Try Now
															</div>
														</Link>
													) : (
														<div className="button-green mx-auto mt-auto">
															Try Now
														</div>
													)}
												</div>
											</ScrollAnimation>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		);
	};

	render() {
		return (
			<div className="bg-green products">
				<Navbar />
				<this.Products />
			</div>
		);
	}
}

export default Products;
