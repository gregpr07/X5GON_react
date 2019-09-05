import React from 'react';
import '../css/bootstrap.css';

import { MoreProducts } from '../Components';
import { StandardHeader, MakeParagraphs } from './ProductsComponents';

export default class Translate extends React.Component {
	Description = () => {
		const contents = [
			[
				'While most translation services aim to be general purpose, we have optimized ours for OER content. We took great care in designing the Deep Neural Networks for acoustic modeling, speech recognition and machine translation, using thousands of selected OER materials and lectures from our case studies as training data. At this moment we have the following language pairs: German, Spanish, French, Italian, Slovenian to English, German to French and Portuguese to Spanish. More are coming.'
			],
			[
				'We created an Automatic Speech Recognition system for automatic transcription of OER in different languages, and then trained our Machine Translation tools for translating those OER. Our machine translation systems are on par with Google Translate for all our language pairs.'
			]
		];
		return (
			<div className="bg-white p-128 maxer mx-auto">
				<div className="mx-lg-1 px-4">
					<h4 className="maxer-880 pb-128 mb-0 text-purple">
						X5GON's Translate not just translates, but also transcribes any type
						of content from videos to textbooks. Using cutting-edge machine
						learning software, our service provides results that come close to
						human translations. Your text is processed within seconds and
						quality comparable with Google Translate.
					</h4>
					<MakeParagraphs object={contents} />
				</div>
			</div>
		);
	};

	render() {
		const currentProduct = 'Translate';
		return (
			<div>
				<StandardHeader
					object={{
						product: currentProduct,
						description: 'Translate all of your content',
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
