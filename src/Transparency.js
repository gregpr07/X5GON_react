import React from 'react';
import './css/bootstrap.css';
import './css/animate.css';
import { StandardHeader } from './products/ProductsComponents';
import { Accordion, Footer } from './Components';

export default class Transparency extends React.Component {
	Description = () => {
		const accordion = [
			{
				title: 'Implications of ML algorithms',
				paragraphs: [
					"Machine learning algorithms predict, as foreseen in X5GON, the preferences of the platform/product user. However, they are also being used to predict the quality of the OER resources based on its author or presented. In both cases, the use of such algorithms amounts to ‘profiling’, which is under GDPR “any form of automated processing of personal data consisting of the use of personal data to evaluate certain personal aspects relating to a natural person, in particular to analyse or predict aspects concerning that natural person's performance at work, economic situation, health, personal preferences, interests, reliability, behaviour, location or movements”. ",
					'X5GON is able to go as far as capturing, ‘implicit feedback’, ‘the mood’ of the user or ‘topic maps’ predicting the questions of the user, building probablistic relational model of the resources the user may be interested in, the user’s topic vector, learning path (Learning Analytics). Information suggesting the user’s current knowledge and goals is further used to inform X5GON’s Learner Engagement Model (Initial Content Representations).',
					'There are two major GDPR compliance considerations in relation to the use of such algorithms: transparency of such algorithms and the right to object. With a view to EGTAI, we have added human agency and oversight, diversity, non-discrimination and fairness, societal and environmental well-being, plus accountability.',
					'Machine learning used in the context of X5GON is based on the attempt to deliver the most appropriate OERs to the right users at the right time. Its learning algorithms are explained in X5GON documentation and their results are overseen by the X5GON expert team. Based on our Ethical and Legal Team analysis of the documentation, it would not appear that the algorithms are used in a way that could discriminate against- or adversely affect any group of people based on their personal circumstances apart from the interest they express in specific OERs, their approach to consuming OERs in accordance with their prior knowledge, and basic information such as language or age, which should not be considered discriminatory in the context of learning activities.'
				]
			},
			{
				title: 'Data controllers and processors',
				paragraphs: [
					'Initially, the consortium members are in the role of (joint) data controllers with regard to the data gathered from OERs and in the related ‘metadata’. However, subject to future arrangements for the backend technologies exploitation, we have foreseen that it might be possible for consortium members / X5GON to act as data processors for their clients. In such cases, the responsibilities towards data subjects would primarily fall on the clients. However, under Article 28 of the GDPR, X5GON / its consortium members would still need to assist the clients in fulfilling their obligations under GDPR towards data subjects whose data would be processed by the system. ',
					'That said, considering X5GON’s machine learning development, it might be challenging to reconcile a scenario whereby X5GON would continuously learn based on its use by all of its users with the role of a data processor. This is because the learning element would be expected to constitute ‘determining purpose and means’ of data processing according to GDPR. Accordingly, it is only under a scenario where a separate user information databased would be set up for the client that X5GON consortium members could be deemed processors. Otherwise, at this point all partners are considered ‘joint controllers’ together with our clients.'
				]
			},
			{
				title: 'Copyrights clearance and management',
				paragraphs: [
					'X5GON addresses copyright and related rights issues in two phases by obtaining and processing the collected materials and making materials available for the public.'
				],
				more: [
					{
						title:
							'Rights clearance for obtaining and processing the collected materials',
						paragraphs: [
							'For the collection and processing (that is transformation, arrangement, translation, modification, systematization, etc.) of materials copyrights and sui generis database rights are cleared with rights holders (originators of educational and non-educational material (instructors, professors, educators, teachers), crowdsourcing workers, the X5GON project research personnel, other authors and makers of databases, publishers and other rights holders). Rights holders will be informed in detail about their participation and called upon to sign Rights Transfer Agreements, which transfer the relevant copyrights and allow for specific uses of the materials for the purposes of the X5GON project. ',
							'Copyrights will be observed even in cases, where materials have been made available under open access and similar terms (like under specific terms of Creative Commons or similar licenses), to avoid rights infringement in cases, where certain uses of the materials made available are restricted (for instance prohibiting the making of derivative works, non-commercial uses only, further sharing materials under original restrictions, etc.).'
						]
					},
					{
						title: 'Making available the collected materials',
						paragraphs: [
							'We identify two possible ways of making the collected materials available. The first is that users of the outcomes or results of the project will need to sign a Right Transfer Agreements before they will be able to use the outcomes. However, as this might not be correct or beneficial, we list an option where an open license could be chosen for the project results.',
							'For the purposes of the X5GON project Terms & Conditions will be drafted, which must be abided by all entities, who will make the materials available (through their platforms, apps, etc.) as well as by all users. Appropriate Rights Transfer Agreements will be concluded with platform providers, allowing them the making available of any copyrighted content as well as all uses (including modifications) by the users of the platforms.',
							'For the purposes of the X5GON project all copyrighted materials will be made available under an appropriate Creative Commons or similar license (like the CC-BY-SA license - attribution-share alike), which allows for use and making available of any copyrighted content by platforms as well as all uses (including modifications) of the materials by the users of the platforms.'
						]
					}
				]
			}
		];
		return (
			<div className="bg-white p-128 maxer mx-auto">
				<div className="mx-lg-1 px-4">
					<h4 className="maxer-880 text-purple">
						Our Machine Learning tools are designed to detect patterns, and they
						often reflect back the same biases we already know exist in our
						culture. The algorithms we designed are not sexist, racist, or
						perpetuate other structural inequalities found in society. Our
						machine learning experts, technology and government partners have
						made sure our algorithms show fairness, accountability, and
						transparency.
					</h4>
					<Accordion contents={accordion} />
				</div>
			</div>
		);
	};
	render() {
		return (
			<div>
				<StandardHeader
					object={{
						background: 'bg-transparency-header',
						subheader: 'HOW IT WORKS',
						product: 'Transparency',
						description: 'How we use ML and AI to process your OER sites',
						button: {
							text: 'Github Link',
							externalLink: 'https://github.com/JozefStefanInstitute/x5gon'
						}
					}}
				/>
				<this.Description />
				<Footer />
			</div>
		);
	}
}
