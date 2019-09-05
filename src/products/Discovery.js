import React from 'react';
import '../css/bootstrap.css';

import { MoreProducts } from '../Components';
import { StandardHeader, MakeParagraphs } from './ProductsComponents';

export default class Discovery extends React.Component {
	Description = () => {
		const contents = [
			[
				'The materials shown currently are text, video and audio. They are enriched them through a process called Wikification and stored into a database that contains data about user activities on the OER repositories that integrated the Connect Service, a library developed for acquiring behavior data. '
			]
		];
		return (
			<div className="bg-white p-128 maxer mx-auto">
				<div className="mx-lg-1 px-4">
					<h4 className="maxer-880 pb-128 mb-0 text-purple">
						The material search enables anyone to search through the indexed OER
						materials that are connected in our network via our Connect service.
						The material search functionality is cross-lingual and functions as
						a Recommendation engine.
					</h4>
					<MakeParagraphs object={contents} />
				</div>
			</div>
		);
	};

	render() {
		const currentProduct = 'Discovery';
		return (
			<div>
				<StandardHeader
					object={{
						product: currentProduct,
						description: 'Search and find materials from all over the world',
						button: {
							text: 'Try Now',
							link: ''
						}
					}}
				/>
				<this.Description />
				<MoreProducts current={currentProduct} padding />
			</div>
		);
	}
}
