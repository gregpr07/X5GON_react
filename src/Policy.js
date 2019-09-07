import React from 'react';
import './css/homepage.css';
import './css/bootstrap.css';
import './css/accordion.css';

import { Navbar } from './Components';

class Policy extends React.Component {
	Header = () => {
		return (
			<div className="bg-policy-header">
				<Navbar />

				<div className="p-128 text-white maxer mx-auto">
					<div className="row maxer-880">
						<div className="col-12">
							<div className="pl-4 ml-1 mx-auto">
								<p className="text-ecosystem text-white text-left pb-3 mb-0">
									CONTRIBUTE
								</p>
								<h1 className="text-white mt-3">Policy</h1>
								<h4 className="maxer-625 mb-5 mt-3 pb-3">
									Read the Recommendation and align policy and technology
								</h4>
								<div className="button-green">Download draft</div>
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
	Accordion = () => {
		const contents = [
			{
				title: 'Preamble',
				paragraphs: [
					'The General Conference of the United Nations Educational, Scientific and Cultural Organization (UNESCO), meeting in Paris in 2019, at its 40th session,',
					'Recalling that the Preamble of UNESCO’s Constitution affirms, “that the wide diffusion of culture, and the education of humanity for justice and liberty and peace are indispensable to the dignity of man and constitute a sacred duty which all the nations must fulfil in a spirit of mutual assistance and concern”,',
					'Recognizing the important role of UNESCO in the field of information and communication technologies (ICT) and in the implementation of the relevant decisions in this area adopted by the General Conference of that Organization.',
					'Further recalling Article I of UNESCO’s Constitution, which assigns to UNESCO among other purposes that of recommending “such international agreements as may be necessary to promote the free flow of ideas by word and image”,',
					'Affirming the principles embodied in the Universal Declaration of Human Rights, that states all people have rights and fundamental freedoms that include the right to seek, receive and impart information and ideas through any media and regardless of frontiers (Article 19), as well as the right to education (Article 26), and the right to freely participate in the cultural life of the community, to enjoy the arts, and to share in scientific advancement and its benefits; and the right to the protection of the moral and material interests resulting from any scientific, literary, or artistic production of which one is the author (Article 27),',
					'Also affirming the 2007 UN Declaration on the Rights of Indigenous Peoples, which recognizes the rights of indigenous peoples in formulating national legislation and implementing national policy,',
					'Noting the 2006 Convention on the Rights of People with Disabilities (Article 24), which recognizes the rights of persons with disabilities to education and the principles contained in the Convention against Discrimination in Education (1960),',
					'Referring to the resolutions of the General Conference of UNESCO with regard to the promotion of multilingualism and universal access to information in cyberspace,',
					'Also referring to the 1997 UNESCO Recommendation concerning the Status of Higher-Education Teaching Personnel as well as the 1966 ILO/UNESCO Recommendation concerning the Status of Teachers which stresses that as part of academic and professional freedom teachers “should be given the essential role in the choice and adaptation of teaching material, the selection of textbooks, and the application of teaching methods”,',
					'Reaffirming the importance of the United Nations 2030 Agenda for Sustainable Development, which underlines that the “spread of information and communications technology and global interconnectedness has great potential to accelerate human progress, to bridge the digital divide and to',
					'develop knowledge societies...” and of Goal 4 (SDG 4), which calls for the International community to “ensure inclusive and equitable quality education and promote lifelong opportunities for all”,',
					'Acknowledging the 2003 World Summit on the Information Society, Declaration of Principles, committing “to build a people-centered, inclusive and development-oriented Information Society where everyone can create, access, utilize and share information and knowledge”,',
					'Referring to the Education 2030 Framework for Action that lists a set of strategic approaches for the implementation of SDG 4, and which underlines increasing access must be accompanied by measures to improve the quality and relevance of education and learning, and in particular that ‘ Education institutions and programmes should be adequately and equitably resourced.. and books other learning materials, open educational resources and technology that are non-discriminatory, learning conducive, learner friendly, context specific, cost effective and available to all learners – children, youth and adults.’',
					'Recognizing that the development of ICTs provides opportunities to improve the free flow of ideas by word, sound and image but also presents challenges for ensuring the participation of all in Knowledge Societies,',
					'Recognizing that quality basic education, as well as media and information literacy are prerequisites to access and benefit from ICTs,',
					'Also recognizing that, in building inclusive Knowledge Societies, Open Educational Resources (OER) can support quality education that is equitable, inclusive, open and participatory as well as enhance academic freedom and professional autonomy of teachers by widening the scope of materials available for teaching and learning,',
					'Considering the 2007 Cape Town Open Education Declaration, the 2009 Dakar Declaration on Open Educational Resources, the 2012 Paris OER Declaration, the Millennium Declaration, the 2000 Dakar Framework for Action, and the International Covenant on Economic, Social and Cultural Rights (Article 13.1), which all recognize “the right of everyone to education”,',
					'Building on the Ljubljana OER Action Plan 2017 to mainstream OER to help all Member States to create inclusive Knowledge Societies and achieve the 2030 Sustainable Development Agenda, namely SDG 4 (quality education), SDG 5 (Gender equality), SDG 9 (Infrastructure), SDG 10 (Reduced inequalities within and across countries), SDG 16 (Peace, justice and strong institutions) and SDG 17 (Partnerships for the goals), thereto:',
					'1. Adopts the present Recommendation on Open Educational Resources (OER);',
					'2. Recommends that Member States apply the following provisions by taking appropriate steps, including whatever legislative or other measures may be required, in conformity with the constitutional practice and governing structures of each State, to give effect within their territories to the principles of the Recommendation;',
					'3. Also recommends that Member States bring the Recommendation to the attention of the authorities and bodies responsible for learning and education and consult relevant stakeholders concerned with learning and education;',
					'4. Further recommends that Member States report to UNESCO, at such dates and in such manner as shall be determined, on the action taken in pursuance of this Recommendation.'
				]
			},
			{
				title: 'Definition and scope',
				paragraphs: [
					'1. Open Educational Resources (OER) are teaching, learning and research materials in any medium that may be composed of copyrightable materials released under an open license, materials not protected by copyright, materials for which copyright protection has expired, or a combination of the foregoing.',
					'2. Open license refers to a copyright license that respects the intellectual property rights of the copyright owner and provides limited permissions granting the public the rights to access, use, adapt, and redistribute educational materials.',
					'3. Information and communication technologies (ICT) provide great potential for effective, equitable and inclusive access to OER and their use, adaptation and redistribution. They can open possibilities for OER to be accessible anytime and anywhere for everyone including individuals with disabilities and individuals coming from marginalized or disadvantaged groups. They can help meet the needs of individual learners and effectively promote gender equality and incentivize innovate pedagogical, didactical and methodological approaches.',
					'4. Stakeholders in this Recommendation include: educators, learners, governmental bodies, parents educational institutions, education support personnel, teacher trainers, educational policy makers, cultural institutions (such as libraries, archives and museums) and their users, technical infrastructure providers, researchers, research institutions, civil society organizations (including professional and student associations), publishers, the public and private sectors, intergovernmental organizations, copyright holders and authors, media and broadcasting groups and funding bodies.'
				]
			},
			{
				title: 'Aims and objectives',
				paragraphs: [
					'5. One key prerequisite to achieve SDG 4 is sustained investment and educational actions by governments and other key education stakeholders, as appropriate, in the creation, curation, regular updating, ensuring inclusive and equitable access, and effective use of high quality materials and programmes of study.',
					'6. As is articulated in the 2007 Cape Town Open Education Declaration and the 2012 Paris OER Declaration, the application of open licenses to educational materials introduces significant opportunities for more cost-effective creation, access, use, adaptation, redistribution, curation, and quality assurance of those materials, including, but not limited to translation, adaptation to different learning and cultural contexts, development of gender-sensitive materials, and the creation of alternative and accessible formats of materials for learners with special educational needs.',
					'7. In addition, the judicious application of OER in combination with appropriate pedagogical methodologies can support a broad range of innovative pedagogical options to engage both educators and learners to become more active participants in educational processes and creators of content as members of diverse and inclusive Knowledge Societies.',
					'8. Furthermore, regional and global collaboration and advocacy in the creation, access, use, adaptation, redistribution and evaluation of OER can enable governments to optimise their own investments in',
					'4',
					'educational content creation, as well as IT infrastructure and curation, in ways that will enable them to meet their defined national educational policy priorities more cost-effectively and sustainably.',
					'9. Noting these potential benefits, the objectives and areas of action of this OER Recommendation are as follows:',
					'(i) Capacity building: developing the capacity of all key education stakeholders to create, access, use, adapt, and redistribute OER, as well as to use and apply open licenses in a manner consistent with national copyright legislation and international obligations;',
					'(ii) Developing supportive policy: encouraging governments, and education authorities and institutions to adopt regulatory frameworks to support open licensing of publicly funded educational materials, develop strategies to enable use and adaptation of OER in support of high quality, inclusive education and lifelong learning for all, and adopt integrated mechanisms to recognize the learning outcomes of OER-based programmes of study;',
					'(iii) Effective, inclusive and equitable access to quality OER: supporting the adoption of strategies and programmes including through relevant technology solutions that ensure OER in any medium are shared in open formats and standards to maximize equitable access, co-creation, curation, and search ability, including for those from vulnerable groups and persons with disabilities;',
					'(iv) Nurturing the creation of sustainability models for OER: supporting and encouraging the creation of sustainability models for OER at national and institutional levels, and the planning and pilot test of new sustainable forms of education and learning;',
					'(v) Facilitating international cooperation: supporting international cooperation between stakeholders to minimize unnecessary duplication in OER development investments and to develop a global pool of culturally diverse, locally relevant, gender-sensitive, accessible, educational materials in multiple languages.'
				]
			},
			{
				title: 'Areas of action',
				paragraphs: [
					'10. This Recommendation addresses five objectives: (i) Building capacity of stakeholders to create, access, use, adapt and redistribute OER; (ii) Developing supportive policy; (iii) Encouraging inclusive and equitable quality OER; (iv) Nurturing the creation of sustainability models for OER; and (v) Facilitating international cooperation.'
				],
				more: [
					{
						title:
							'Building capacity of stakeholders to create, access, use, adapt and redistribute OER',
						paragraphs: [
							'11. Member States are recommended to strategically plan and support OER capacity building and awareness raising at the institutional and national levels, targeting all education sectors and levels. Member States are encouraged to consider the following:',
							'(a) building awareness among relevant stakeholder communities on how OER can increase access to educational resources, improve learning outcomes, maximise the impact of public funding, and empower educators and learners to become co-creators of knowledge;',
							'(b) providing systematic and continuous capacity building (in-service and pre-service) on how to create, access, make available, use, adapt, and redistribute OER as an integral part of training programmes at all levels of education. This should include improving capacity of public authorities, policy makers, quality development and assurance professionals to understand OER and support their integration into teaching and learning;',
							'(c) raising awareness concerning exceptions and limitations for the use of copyrighted works for educational and research purposes. This should be enacted to facilitate the integration of a wide range of works in OER, recognizing that the fulfilment of educational goals as well as the development of OER requires engagement with existing copyright protected works.',
							'(d) leveraging open licensed tools, platforms and standards to help ensure OER can be easily found, accessed, used, adapted and redistributed in a safe, secure and privacy protected mode. This could include free and open source authoring tools, libraries and other repositories and search engines, systems for long term preservation and frontier technologies for automatic OER processing such as artificial intelligence methods and tools; and',
							'(e) making available easily accessible resources that provide information and assistance to all OER stakeholders on OER related topics including copyright and open licensing of educational material.'
						]
					},
					{
						title: 'Developing supportive policy',
						paragraphs: [
							'12. Member States, according to their specific conditions, governing structures and constitutional provisions, should develop or encourage policy environments, including those at the institutional level, that are supportive of effective OER practices. Through a transparent participatory process that includes dialogue with stakeholders, Member States are encouraged to consider the following:',
							'(a) developing and implementing policies and/or regulatory frameworks which encourage that educational resources developed with public funds be openly licensed or dedicated to the public domain as appropriate, and financial and human resources coordinated for the implementation of the policies;',
							'(b) encouraging and supporting institutions to develop or update legal or policy frameworks to stimulate the creation, access, use, adaptation and redistribution of quality OER by educators and learners; and to develop and integrate quality assurance mechanism for OER into the existing quality assurance strategies for teaching and learning materials;',
							'(c) developing mechanisms to support and incentivize all stakeholders to publish source files and accessible OER using standard open file formats in public repositories;',
							'(d) aligning OER policies with other open policies and guiding principles such as those for Open Access, Open Data, Open Pedagogy, Open Source Software and Open Science; and',
							'(e) adjusting or reforming the curriculum and assessment in accordance with the needs of the use of OER and to motivate the active use, creation, and sharing of OER by teachers and students; and recognizing the learning outcomes of OER-based programmes of study;'
						]
					},
					{
						title: 'Encourage inclusive and equitable quality OER',
						paragraphs: [
							'13. Member States are encouraged to support the creation, access, use, adaptation and redistribution of inclusive and equitable quality OER for all stakeholders. These would include those learners in formal and non-formal education contexts irrespective of age, gender, physical ability, socio-economic status, as well as those who live in remote areas (including nomadic populations), internally and forcibly displaced persons, migrants and refugees. In all instances, gender equality should be ensured, and particular attention paid to equity and inclusion for learners who are especially disadvantaged due to multiple and intersecting forms of discrimination. Member States are recommended to consider the following:',
							'(a) ensuring access to OER that most suitably meet both the needs and material circumstances of target learners and the educational objectives of the courses or subjects for which they are being provided. This would include offline (including printed) modalities for accessing resources where appropriate;',
							'(b) supporting OER stakeholders to develop gender-sensitive, culturally and linguistically relevant OER, and to create local language OER, particularly in indigenous languages which are less used, under- resourced and endangered;',
							'(c) ensuring that the principle of gender equality, non-discrimination, accessibility and inclusiveness is reflected in strategies and programmes for creating, accessing, using, adapting, and redistributing OER;',
							'(d) incentivising public and private investments in IT infrastructure and broadband, to provide increased access to OER, particularly for low-income, rural and remote communities; and',
							'(e) developing and adapting existing evidence-based standards, benchmarks and related criteria for the quality assurance of OER, as appropriate, which emphasize reviewing educational resources (both openly licensed and not openly licensed) under regular quality assurance mechanisms.'
						]
					},
					{
						title: 'Nurturing the creation of sustainability models for OER',
						paragraphs: [
							'14. Member States, according to their specific conditions, governing structures and constitutional provisions, are recommended to support and encourage the development of comprehensive, inclusive and integrated OER sustainability models. Member States are encouraged to consider the following:',
							'(a) reviewing current provisions, procurement policies and regulations to expand and simplify the process of procuring quality goods and services to prioritize the creation, ownership, translation, adaptation, curation, and sharing of OER, where appropriate, as well as to develop the capacity of all OER stakeholders to participate in these activities;',
							'(b) catalysing sustainability models through traditional funding sources but also non-traditional reciprocity based revenue generation such as donations, memberships, pay what you want, and crowdfunding that may provide revenues and sustainability to OER provision;',
							'(c) promoting and raising awareness of other value added models using OER across institutions and countries where the focus is on participation, co-creation, generating value collectively, community partnerships, spurring innovation, and bringing people together for a common cause; and',
							'(d) enacting regulatory frameworks that support the development of OER products and services that align with national standards as well as the interest and values of the OER stakeholders.'
						]
					},
					{
						title: 'Facilitating international cooperation',
						paragraphs: [
							'15. To promote the development and use of OER, Member States should facilitate international cooperation among all relevant stakeholders, whether on a bilateral or multilateral basis. Member States are encouraged to consider the following:',
							'(a) promoting and stimulating cross-border collaboration and alliances on OER projects and programmes, leveraging existing transnational, regional and global collaboration mechanisms and organizations. This should include joining efforts on collaborative development and use of OER as well as capacity building, communities of practice, joint research on OER, and mutual cooperative assistance between all countries regardless of their state of development;',
							'(b) exploring methods to establish regional and international funding mechanisms for implementing and strengthening OER as well as to understand mechanisms that can support international, national, and regional efforts;',
							'(c) supporting the creation and maintenance of effective peer networks that share OER, based on areas such as subject matter, language, institutions, regions, and level of education, at local, regional and global levels; and',
							'(d) incorporating, where appropriate, specific clauses relating to OER in international agreements concerned with cooperation in the fields of education.'
						]
					}
				]
			},
			{
				title: 'Monitoring',
				paragraphs: [
					'16. Member States should, according to their specific conditions, governing structures and constitutional provisions, evaluate policies and programmes related to OER using a combination of quantitative and qualitative approaches, as appropriate. Member States are encouraged to consider the following:',
					'(a) deploying appropriate research programmes, tools and indicators to measure the effectiveness and efficiency of OER policies and incentives against defined objectives, including specific targets for disadvantaged and vulnerable groups;',
					'(b) collecting, presenting, and disseminating progress, good practices, innovations and research reports on OER and its implications with the support of UNESCO and international open education communities; and',
					'(c) developing strategies to monitor and evaluate the educational effectiveness and long-term financial efficiency of OER, which include participation of all relevant stakeholders. Such strategies could focus on improving learning processes and strengthening the connections between findings, decision-making, transparency, and accountability to ensure the best educational outcomes. This would include support to the development of an evidence base on the impact of OER on education and learning.'
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
									{object.paragraphs.map((paragraph, subindex) => (
										<p key={subindex} className="text-muted maxer-880">
											{paragraph}
										</p>
									))}
								</div>
								{object.more
									? object.more.map((object, index) => {
											const targetID =
												'collapse' + index + object.title.slice(0, 3);
											return (
												<div className="card blue" key={index}>
													<div className="card-header" id="headingOne">
														<div
															className="btn w-100 text-left p2"
															data-toggle="collapse"
															data-target={'#' + targetID}
															aria-expanded="true"
															aria-controls={'collapse' + targetID}
														>
															<p className="mb-0 text-purple p2 line-h-52">
																{object.title}
																<span
																	id={targetID}
																	className="float-right collapse show plus-minus blue"
																></span>
															</p>
														</div>
													</div>

													<div
														id={targetID}
														className="collapse"
														aria-labelledby="headingOne"
													>
														<div className="card-body">
															{object.paragraphs.map((paragraph, subindex) => (
																<p
																	key={subindex}
																	className="text-muted maxer-880"
																>
																	{paragraph}
																</p>
															))}
														</div>
													</div>
												</div>
											);
									  })
									: null}
							</div>
						</div>
					);
				})}
			</div>
		);
	};

	Description = () => {
		return (
			<div className="bg-white p-128 maxer mx-auto">
				<div className="mx-lg-1 px-4">
					<h4 className="maxer-880 text-purple">
						The new UNESCO Recommendation in OER can be implemented via our
						technology and can be used to empower you and all other
						stakeholders.
					</h4>
					<this.Accordion />
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

export default Policy;
