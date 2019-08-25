import React from 'react';
import './css/homepage.css';
import './css/bootstrap.css';
import { Link } from 'react-router-dom';
import { Navbar } from './Components';

class Join extends React.Component {
	Header = () => {
		return (
			<div className="bg-black">
				<Navbar />
				<div className="p-5 text-white maxer mx-auto">
					<div className="container mb-5 mx-auto">
						<p className="text-ecosystem text-white text-left">CONTRIBUTE</p>
						<h1 className="text-white">Join Forces</h1>
						<h4 className="maxer-500 mb-5 mt-4">
							We suggest a pact that empowers all involved OER sites and
							players.
						</h4>
						<div className="button-green">Fill in the Form</div>
					</div>
				</div>
			</div>
		);
	};
	Description = () => {
		const contents = [
			'Place recommendation modules in your repository content, create new discovery experiences, and engage your audience with the most relevant content from across all of the sites in our OER Network.',
			'On top of this we have developed a global cross-site and cross-lingual recommendation engine. It uses machine learning techniques for their core, and semantic technologies to ensure valid combinations of recommended materials and existing skills of the user.',
			'We have designed rich models of users on OER sites, and used these models for recommendation and personalization of learning materials. More specifically the user modelling architecture supports real-time, cross-site and cross-lingual user models and recommendation techniques which take into account the user and content meta-data available in online learning environments.',
			'Cross-site recommendation uses content models of learning materials to identify related and complementary learning materials between sites. Cross-lingual aspects are handled by using Wikipedia, and comparing text documents across top 100 Wikipedia languages.'
		];
		return (
			<div className="bg-white p-128 px-5 maxer mx-auto">
				<div className="mx-lg-5">
					<h4 className="maxer-880 pb-5">
						By joining forces and connecting your OER site to all existing OER
						sites into the first Global OER Network, we can together unleash the
						equity potential of OER and start the first data driven effort
						capable of understanding and recommending OERs across different
						sites, languages, modalities such as video, documents and textbooks.
					</h4>
					<div className="row">
						{contents.map((paragraph, index) => {
							return (
								<div className="col-12 col-md-6 mt-3 text-muted maxer-500">
									{paragraph}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	};
	Description = () => {
		const contents = [
			{
				title:
					'Make the most out of your content by joining our platform and let us give you:',
				paragraphs: [
					'Cross-modal technologies for multimodal content understanding',
					'Cross-site technologies to transparently accompany and analyse users across sites',
					'Cross-domain technologies for cross domain content analytics',
					'Cross-language technologies for cross lingual content recommendation',
					'Cross-cultural technologies for cross cultural learning personalisation'
				]
			},
			{
				title:
					'Get into a pact that empowers all involved OER stakeholders and allows OER sites:',
				paragraphs: [
					'To become a partner in our Global Network Partnership',
					'To use our Connect Service as well as all other services',
					'To give us access to content data and user behaviour data',
					'To share content recommendations with other OER sites',
					'To share with us the contacts of their IT managers'
				]
			},
			{
				title: 'In return we promise:',
				paragraphs: [
					'To use the X5GON platform to ingest your content and use state of the art technologies such as machine learning, machine translation, machine quality assurance, personalisation, learning analytics, to boost your content visibility and use.',
					'To create fair and inclusive cross-pollination of content to/from other OER sites to your site.',
					'To transparently work with you, and disclose algorithms and produce you with impact metrics.',
					'To not breach any data privacy, ethics or other data and artificial intelligence related boundaries.'
				]
			}
		];
		return (
			<div className="bg-white p-128 px-5 maxer mx-auto">
				<div className="mx-lg-5 offers">
					<h4 className="maxer-880 text-purple">
						X5GON's Recommendation increases user engagement across each of your
						content pages, improving visibility of your content.
					</h4>
					<div className="row">
						{contents.map((object, index) => {
							return (
								<div className="col-12 col-md-6 mt-3 mt-md-5 text-muted maxer-500">
									<p className="text-purple-bold">{object.title}</p>
									<ul className="pl-0 pl-md-2 pl-lg-3">
										{object.paragraphs.map((paragraph, index) => {
											return (
												<li key={index} className="muted pb-2">
													{paragraph}
												</li>
											);
										})}
									</ul>
								</div>
							);
						})}
					</div>
				</div>
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
