import React from 'react';
import './css/bootstrap.css';
import './css/components.css';
import './css/animate.css';
import { Navbar } from './Components';

class Products extends React.Component {
	Products = () => {
		const contents = [
			{
				todo: 'Recommend',
				text: 'Show your content in a network of other sites',
				description: [''],
				link: ''
			},
			{
				todo: 'Analytics',
				text: 'Understand the trends of your content usage',
				description: [
					'We built a Learning Analytics Engine that is capable of dealing with multi-lingual collections of OER. We created a cross-lingual search that on a simple level is able to know that a video in French and a paper in Slovenian are talking about the same topic, may not require a full intelligible translation, using cross-lingual text matching tools, but also on a more complex level by creating high quality transcriptions and translations which rely on more sophisticated technologies, providing access to high-quality OER across languages.'
					//'The Analytics are the basic infrastructure and tools to support cross-lingual OER. We use cross-linguality for detecting information across different languages. Therefore, we support access to relevant content that is not available in a user’s native language. By incorporating cross-lingual features we drive inclusiveness of different cultures. This way we create personalized learning as an individualized navigation through the OERs on different sites. The learning analytics engine extracts and updates user content maps, the distribution of user skills and prediction models for identifying user intent.',
					//'We achieve this first by creating an Automatic Speech Recognition system for automatic transcription of OER in different languages, for example English, Spanish, Slovene and German, then we use Machine Translation tools for translating those OER. The analytics engine therefore provides the relevant knowledge required to drive the operation of the OER and social network across OER sites with content in different languages. While doing this we paid attention to two important aspects, fine-grained indexation of educational videos by transcription tools, and investigation of multicultural, pedagogical and juridical issues, with particular care on privacy. Our machine translation systems are on par with Google Translate for all our language pairs.'
				],
				link: ''
			},
			{
				todo: 'Discovery',
				text: 'Search and find materials from all over the world',
				description: [''],
				link: 'search'
			},
			{
				todo: 'Translate',
				text: 'Translate your content in every format',
				description: [''],
				link: ''
			},
			{
				todo: 'Connect',
				text: 'Make your users connected to all other OER sites',
				description: [''],
				link: ''
			},
			{
				todo: 'Feed',
				text: 'Provide data for all stakeholders',
				description: [''],
				link: ''
			}
		];
		return (
			<div className="maxer p-4 mx-auto">
				<div className="text-center p-lg-5">
					<div className="mx-auto text-ecosystem text-white">OUR PRODUCTS</div>
					<div className="px-2">
						<h1 className="py-4 solutions">Solutions for all Needs</h1>
						<p className="description mx-auto mb-md-5">
							Powered by one content recommendation technology
						</p>
					</div>
				</div>

				<div className="p-2 pt-3">
					{contents.map((content, index) => {
						return (
							<div className="card p-5 px-sm-3 mx-auto mb-4">
								<div className="row">
									<div className="col-12 col-md-4">
										<img
											className="mx-auto mb-3"
											src={'ecosystem.jpg'}
											width="75%"
											alt="ecosystem"
										/>
									</div>
									<div className="col-12 col-md-8">
										<h3 className="text-center text-md-left">{content.todo}</h3>
										<p className="text-muted text-center text-md-left">
											{content.text}
										</p>
										{content.description.map((desc, index) => {
											return (
												<p key={index} className="text-dark">
													{desc}
												</p>
											);
										})}
									</div>
								</div>
							</div>
						);
					})}
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
