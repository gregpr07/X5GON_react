import React from 'react';
import './css/homepage.css';
import './css/bootstrap.css';

import { Navbar } from './Components';
import { thisExpression } from '@babel/types';

class Join extends React.Component {
	Header = () => {
		return (
			<div className="bg-join-header">
				<Navbar />

				<div className="p-128 text-white maxer mx-auto">
					<div className="row">
						<div className="col-12 col-md-7">
							<div className="pl-4 ml-1 mx-auto">
								<p className="text-ecosystem text-white text-left pb-3 mb-0">
									CONTRIBUTE
								</p>
								<h1 className="text-white mt-3">Join Forces</h1>
								<h4 className="maxer-625 mb-5 mt-3 pb-3">
									We suggest a pact that empowers all involved OER sites and
									players.
								</h4>
								<div className="button-green">Fill in the Form</div>
							</div>
						</div>
						{/* <div className="col-12 col-md-5 bg-white">
							<div
								style={{
									background: 'white',
									height: '100%',
									width: '100%',
									borderRadius: '100px'
								}}
							></div>
						</div> */}
					</div>
				</div>
			</div>
		);
	};
	Description = () => {
		return (
			<div className="bg-white p-128 maxer mx-auto">
				<div className="mx-lg-1 px-4 offers">
					<h4 className="maxer-880 text-purple">
						X5GON's Recommendation increases user engagement across each of your
						content pages, improving visibility of your content.
					</h4>

					<this.Accordion></this.Accordion>
				</div>
			</div>
		);
	};
	Accordion = () => {
		const contents = [
			{
				title: 'What Can We Offer',
				subtitle:
					'Make the most out of your content by joining our platform and let us give you:',

				paragraphs: [
					'Cross-modal technologies for multimodal content understanding,',
					'Cross-site technologies to transparently accompany and analyse users across sites,',
					'Cross-domain technologies for cross domain content analytics,',
					'Cross-language technologies for cross lingual content recommendation,',
					'Cross-cultural technologies for cross cultural learning personalisation.'
				]
			},
			{
				title: 'How Can You Contribute',
				subtitle:
					'Get into a pact that empowers all involved OER stakeholders and allows OER sites:',

				paragraphs: [
					'To become a partner in our Global Network Partnership,',
					'To use our Connect Service as well as all other services,',
					'To give us access to content data and user behaviour data,',
					'To share content recommendations with other OER sites,',
					'To share with us the contacts of their IT managers.'
				]
			},
			{
				title: 'What Do We Promise In Return',
				subtitle: 'In return we promise:',
				paragraphs: [
					'To use the X5GON platform to ingest your content and use state of the art technologies such as machine learning, machine translation, machine quality assurance, personalisation, learning analytics, to boost your content visibility and use,',
					'To create fair and inclusive cross-pollination of content to/from other OER sites to your site,',
					'To transparently work with you, and disclose algorithms and produce you with impact metrics,',
					'To not breach any data privacy, ethics or other data and artificial intelligence related boundaries.'
				]
			}
		];
		return (
			<div className="accordion pt-128" id="accordionExample">
				{contents.map((object, index) => {
					const targetID = 'collapse' + index + object.title.slice(0, 3);
					return (
						<div className="card" key={index}>
							<div className="card-header" id="headingOne">
								<div
									className="btn w-100 text-left .h4"
									data-toggle="collapse"
									data-target={'#' + targetID}
									aria-expanded="true"
									aria-controls={'collapse' + targetID}
								>
									<h4 className="mb-0 text-green">
										{object.title}
										<span
											id={targetID}
											className="float-right collapse show plus-minus"
										></span>
									</h4>
								</div>
							</div>
							<div
								id={targetID}
								className="collapse"
								aria-labelledby="headingOne"
							>
								<div className="card-body">
									<p className="text-purple-bold">{object.subtitle}</p>
									{object.paragraphs.map((paragraph, subindex) => (
										<p key={subindex} className="text-muted maxer-880">
											{paragraph}
										</p>
									))}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		);
	};

	render() {
		return (
			<div>
				<this.Header />
				<this.Description />
			</div>
		);
	}
}

export default Join;
