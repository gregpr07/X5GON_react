import React from 'react';
import '../css/bootstrap.css';

import { MoreProducts } from '../Components';
import { StandardHeader, MakeParagraphs } from './ProductsComponents';

export default class Connect extends React.Component {
	Description = () => {
		const contents = [['sample text']];
		return (
			<div className="bg-white p-128 maxer mx-auto">
				<div className="mx-lg-1 px-4">
					<h4 className="maxer-880 pb-128 mb-0 text-purple">SAMPLE TEXT</h4>
					<MakeParagraphs object={contents} />
				</div>
			</div>
		);
	};

	render() {
		const currentProduct = 'Connect';
		return (
			<div>
				<StandardHeader
					object={{
						product: currentProduct,
						description: 'Make your users connected to all OER sites in Moodle',
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
