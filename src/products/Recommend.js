import React from 'react';
import '../css/bootstrap.css';

import { MoreProducts, Footer } from '../Components';
import { StandardHeader, MakeParagraphs } from './ProductsComponents';

export default class Recommend extends React.Component {
	Description = () => {
		const contents = [
			[
				'Place recommendation modules in your repository content, create new discovery experiences, and engage your audience with the most relevant content from across all of the sites in our OER Network.',
				'We have designed rich models of users on OER sites, and used these models for recommendation and personalization of learning materials. More specifically the user modelling architecture supports real-time, cross-site and cross-lingual user models and recommendation techniques which take into account the user and content meta-data available in online learning environments.'
			],
			[
				'On top of this we have developed a global cross-site and cross-lingual recommendation engine. It uses machine learning techniques for their core, and semantic technologies to ensure valid combinations of recommended materials and existing skills of the user.',
				'Cross-site recommendation uses content models of learning materials to identify related and complementary learning materials between sites. Cross-lingual aspects are handled by using Wikipedia, and comparing text documents across top 100 Wikipedia languages.'
			]
		];
		return (
			<div className="bg-white p-128 maxer mx-auto">
				<div className="mx-lg-1 px-4">
					<h4 className="maxer-880 pb-128 mb-0 text-purple">
						By joining forces and connecting your OER site to all existing OER
						sites into the first Global OER Network, we can together unleash the
						equity potential of OER and start the first data driven effort
						capable of understanding and recommending OERs across different
						sites, languages, modalities such as video, documents and textbooks.
					</h4>

					<MakeParagraphs object={contents} />
				</div>
			</div>
		);
	};

	render() {
		const currentProduct = 'Recommend';
		return (
			<div>
				<StandardHeader
					object={{
						product: currentProduct,
						description: 'Show your content in a network of other sites!',
						button: {
							text: 'Try Now',
							link: ''
						}
					}}
				/>
				<this.Description />
				<MoreProducts current={currentProduct} padding />
				<Footer />
			</div>
		);
	}
}
