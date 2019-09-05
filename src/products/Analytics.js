import React from 'react';
import '../css/bootstrap.css';

import { MoreProducts } from '../Components';
import { StandardHeader, MakeParagraphs } from './ProductsComponents';

export default class Analytics extends React.Component {
	Description = () => {
		const contents = [
			[
				'We created a cross-lingual search that on a simple level is able to know that a video in French and a paper in Slovenian are talking about the same topic, may not require a full intelligible translation, using cross-lingual text matching tools, but also on a more complex level by creating high quality transcriptions and translations which rely on more sophisticated technologies, providing access to high-quality OER across languages.',
				'The Analytics are the basic infrastructure and tools to support cross-lingual OER. We use cross-linguality for detecting information across different languages. Therefore, we support access to relevant content that is not available in a user’s native language. By incorporating cross-lingual features we drive inclusiveness of different cultures. This way we create personalized learning as an individualized navigation through the OERs on different sites. The learning analytics engine extracts and updates user content maps, the distribution of user skills and prediction models for identifying user intent.'
			],
			[
				'We achieve this first by creating an Automatic Speech Recognition system for automatic transcription of OER in different languages, for example English, Spanish, Slovene and German, then we use Machine Translation tools for translating those OER. The analytics engine therefore provides the relevant knowledge required to drive the operation of the OER and social network across OER sites with content in different languages. While doing this we paid attention to two important aspects, fine-grained indexation of educational videos by transcription tools, and investigation of multicultural, pedagogical and juridical issues, with particular care on privacy. Our machine translation systems are on par with Google Translate for all our language pairs.'
			]
		];
		return (
			<div className="bg-white p-128 maxer mx-auto">
				<div className="mx-lg-1 px-4">
					<h4 className="maxer-880 pb-128 mb-0 text-purple">
						X5GON's Analytics is capable of dealing with multi-lingual
						collections of OER. We can give you insight into the usage of your
						resources across different languages, make your content seen across
						the world and see how your resources are being used in different
						cultures.
					</h4>
					<MakeParagraphs object={contents} />
				</div>
			</div>
		);
	};

	render() {
		const currentProduct = 'Analytics';
		return (
			<div>
				<StandardHeader
					object={{
						product: currentProduct,
						description: 'Understand the trends of your content usage',
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
