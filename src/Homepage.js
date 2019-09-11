import React from 'react';
import './css/bootstrap.css';
import './css/homepage.css';
import './css/animate.css';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import { MoreProducts, Navbar, CurrentWidth } from './Components';
import SmoothScroll from 'smooth-scroll';

class Homepage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hide: {}
		};
	}

	breakpoints = { sm: 576, md: 768, lg: 992, xl: 1200 };

	// FUNCTIONS

	// COMPONENTS
	Header = () => {
		// eslint-disable-next-line
		var scroll = new SmoothScroll('a[href*="#"]', {
			header: '#navbar',
			speed: 1500,
			speedAsDuration: true,
			offset: -1,
			easing: 'easeInOutQuad',
			clip: true,
			updateURL: false,
			popstate: false
		});
		return (
			<header className="header bg-black" style={{ zIndex: '-100' }}>
				<Navbar />

				<div className="mx-auto maxer contents">
					<div className="row no-gutters my-auto pt-4 mt-md-0">
						<div className="col-md-12 col-lg-6 my-auto">
							<div className="main-content pl-1 ml-4">
								<h1 className="text-white text-main-header">
									Education.
									<b className="d-block">Connected.</b>
								</h1>
								<p className="mt-3 pt-3 text-white w-100 body-2 pb-lg-5 pr-4 pr-md-3">
									We are building World's first ecosystem connecting Open
									Educational Resource sites for the collective benefit of
									everyone, everywhere.
								</p>

								<a href="#more">
									<img
										src="/imgs/svgs/ArrowDown.svg"
										height="64px"
										alt="more"
										className="my-4 mt-md-0"
									/>
								</a>
							</div>
						</div>
						<div className="col-md-12 col-lg-6">
							<div className="main-img animated fadeIn slower"></div>
						</div>
					</div>
				</div>
			</header>
		);
	};
	Description = () => {
		let contents = [
			{
				title: 'All in One Place',
				color: '#00134d',
				text:
					'With AI discoverability of OER repositories we are now linking hundreds of thousands of scholarly articles, text books, videos, documents and databases.'
			},
			{
				title: 'Relevant and Tailormade',
				color: '#00134d',
				text:
					'With Machine Learning for Quality Assurancee we are semantically connecting, ranking and personalizing OER depending on users and content patterns.'
			},
			{
				title: 'Global and Truly Inclusive',
				color: '#00134d',
				text:
					'With Machine Translation for all content types we are offering high quality multi lingual translation of open content including videos, textbooks and documents.'
			}
		];
		return (
			<div className="bg-light description">
				<div className="maxer mx-auto p-128">
					<div className="px-1 mx-4">
						<ScrollAnimation animateIn="fadeIn" animateOnce={true}>
							<h3 className="text-purple mb-5 pb-lg-5 w-sm-100 w-75">
								Connecting Open Educational Resources in a Smart Way
							</h3>
						</ScrollAnimation>

						<div className="row pr-0">
							{contents.map((col, index) => {
								return (
									<div className="col-sm-4 mt-3 mb-md-0" key={index}>
										<ScrollAnimation
											animateIn="fadeInUp"
											animateOnce={true}
											duration={1}
											delay={(index + 1) * 150}
										>
											<div className="row">
												<div className="col-lg-2 col-0 d-none d-lg-block">
													<div
														className="line"
														style={{ backgroundColor: col.color }}
													>
														&nbsp;
													</div>
												</div>
												<div className="col-lg-10 col-12">
													<p className="text-purple-bold content1-title mb-2">
														{col.title}
													</p>
													<p className="text-muted desc-box p-0">{col.text}</p>
												</div>
											</div>
										</ScrollAnimation>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		);
	};
	Ecosystem = () => {
		let contents = [
			{
				group: 'Learners',
				text:
					'Our products gives everyone the ability to learn, discover, compile playlists and make notes to solve problems.',
				more: {
					title: 'Too Hard for Me?',
					p:
						'Use our platform to improve your success rate in understanding an assignment, read a difficult paper, and watch a complicated video. Find a topic you are interested in and we will recommend you resources and track your success. Register and tell us about yourself so we can tailor a solution specifically to you.'
				},
				image: 'learners.jpg'
			},
			{
				group: 'Teachers',
				text:
					'X5GON products gives you the ability to access OER material quickly and across multiple subjects. It allows you to design, browse, discover, collaborate on and publish your own materials.',
				more: {
					title: 'Find fast and reuse',
					p:
						'We take you one step further, offering an “export/import model” with cross-lingual search and cross-site options to provide visibility of your own content in your community, and finally help you to find and compile quality classroom materials quickly. '
				},
				image: 'teachers.jpg'
			},
			{
				group: 'Institutions',
				text:
					'Our ecosystem can be used as an infrastructure that transforms quality, institutional level structured and unstructured content into a dynamically evolving knowledge graph that quantifies complex relationships between content and users or learners via the enrichment of concepts in multiple languages, modalities and formats.',
				more: {
					title: 'Unlock and Connect',
					p:
						'We take your institution one step further, allowing you to push content out of your repository, create equity and multiply impact and usage of your material.  Most importantly, we can connect your OER repo with your Moodle installation.'
				},
				image: 'institutions.jpg'
			},
			{
				group: 'Researchers',
				text:
					'X5GON  allows access to OER data for the world of data science and research to create more value via reuse and repurpose of data. We have a suite of data streams to bring OER content and features to your hackathon, repository, institution, website and apps.',
				more: {
					title: 'Build on Top',
					p:
						'Use our platform to discover and curate OER content, and easily distribute and display those OERs in your apps. In your mobile apps, we make it easy to work with the X5GON API and even integrate to grow your project, business or repository around OER content.'
				},
				image: 'researchers.jpg'
			},
			{
				group: 'Governments',
				text:
					'X5GON thrives on interconnecting national repositories, uncovering and enriching content and discovering unexpected relationships. We are developing the most accessible, comprehensive platform for government funded OER in order to support the next generation of global digital education equity.',
				more: {
					title: 'Maximize Equity',
					p:
						'Our ecosystem can give you an insight how your publicly funded resources are getting used. Understand how your citizens are overcoming challenges to engage with publicly funded resources, how local businesses are building on your data and showcase the impact of your investments and political decisions.'
				},
				image: 'governments.jpg'
			}
		];
		return (
			<div className="bg-white ecosystem p-128">
				<div className="maxer mx-auto">
					<div className="text-center mx-4 mx-sm-5 px-sm-2">
						<div className="mx-auto text-ecosystem">ECOSYSTEM</div>
						<div>
							<h1 className="py-4 benefit-h1 pb-lg-5">Who Can Benefit?</h1>
						</div>
						{contents.map((content, index) => {
							const style = 'col-12 col-md-6 my-auto text-lg-left';
							return (
								<div className="row pt-128 h-100" key={index}>
									<div
										className={
											index % 2 !== 0 && CurrentWidth() >= this.breakpoints.md
												? 'order-last ' + style
												: style
										}
									>
										<ScrollAnimation animateIn="fadeIn" animateOnce={true}>
											<img
												src={'/imgs/illustrations/' + content.image}
												width="100%"
												alt="ecosystem"
											/>
										</ScrollAnimation>
									</div>

									<div className={style}>
										<ScrollAnimation
											animateIn="fadeInUp"
											animateOnce={true}
											duration={1}
											delay={250}
										>
											<div className="width-limit mx-auto mt-4 pt-4 pt-md-0 mt-md-0 ">
												<h3 className="text-lg-left text-purple">
													{content.group}
												</h3>
												<p className="py-3 pb-lg-0 mb-md-4 mb-2">
													{content.text}
												</p>

												{this.state.hide[content.group] ? (
													<div className="more animated fadeIn slow">
														<p className="more-title my-0 mb-2">
															{content.more.title}
														</p>
														<p>{content.more.p}</p>
													</div>
												) : (
													<button
														className="buttonless-green read-more"
														onClick={() => {
															this.setState({
																hide: {
																	...this.state.hide,
																	[content.group]: true
																}
															});
														}}
													>
														READ MORE +
													</button>
												)}
											</div>
										</ScrollAnimation>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	};
	Offers = () => {
		const content = [
			{
				title: 'We essentially welcome OER sites',
				ul: [
					'To become a partner in the X5GON Global Network Partnership.',
					'To introduce our Connect Service and share contact with IT managers.',
					'To give us access to content data and user behaviour data.',
					'In this way share content recommendations with other OER sites.'
				]
			},
			{
				title: 'In return we promise',
				ul: [
					'To use the X5GON platform to ingest your content and use state of the art technologies such as machine learning, machine translation, machine quality assurance, personalisation, learning analytics, to boost your content visibility and use.',
					'To create fair and inclusive cross-pollination of content to/ from other OER sites to your site.',
					'To transparently work with you, and disclose algorithms and produce you with impact metrics.',
					'To not breach any data privacy, ethics or other data and artificial intelligence related boundaries.'
				]
			}
		];
		const style = 'col-12 col-sm-6';
		return (
			<div className="maxer mx-auto">
				<div className="m-0 m-md-5 bg-light offers">
					<div className="row p-4 m-1 p-md-5 m-sm-3 join">
						{content.map((single, index) => {
							return (
								<div className={style} key={index}>
									<p className="text-green my-4">{single.title}</p>
									<ul className="pl-0 pl-md-2 pl-lg-3">
										{single.ul.map((li, index) => {
											return (
												<li className="muted" key={index}>
													{li}
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
	Partners = () => {
		const partners = [
			'IJS',
			'K4A',
			'MIZS',
			'posta_slo',

			'UO',
			'UPV',
			'UCL',
			'UDN'
		];
		return (
			<div className="bg-light partners">
				<div className="maxer mx-auto products pb-128 row px-1 pt-3">
					{partners.map((image, index) => (
						<div
							key={index}
							className={
								'col-md-3 col-6 ' +
								(CurrentWidth() > this.breakpoints.md && index < 4
									? 'mb-5'
									: 'mt-5')
							}
						>
							<img
								src={'/imgs/partners/' + image + '_logo copy.png'}
								alt={image}
								className="mx-auto d-block px-3"
								height={CurrentWidth() > this.breakpoints.md ? '100%' : 'auto'}
								width={CurrentWidth() > this.breakpoints.md ? 'auto' : '100%'}
							></img>
						</div>
					))}
				</div>
			</div>
		);
	};
	Join = () => {
		const content = {
			title: 'Join the Global Network Partnership',
			text: [
				'We aim to give a chance to unlock the digital potential of  OER, and to overcome OER discoverability, disparity and fragmentation and understand the world of OER in a more structured manner.',
				'The project proposes connecting all existing OER sites into a Global Network.  To do so, we suggest a pact that empowers all involved OER sites and players.'
			]
		};
		const style = 'col-12 col-sm-6 my-auto';
		return (
			<div className="maxer mx-auto">
				<div className="row px-4 mx-1 px-md-5 mx-sm-3 h-100 join p-128">
					<div
						className={
							CurrentWidth() >= this.breakpoints.sm
								? 'order-last ' + style
								: style
						}
					>
						<img
							src={'imgs/illustrations/join-forces.jpg'}
							width="100%"
							alt="ecosystem"
						/>
					</div>

					<div className={style + ' width-limit mr-auto'}>
						<h3 className="text-purple mb-lg-4">{content.title}</h3>
						<div className="py-3">
							{content.text.map((p, index) => {
								return (
									<p className="text-muted" key={index}>
										{p}
									</p>
								);
							})}
						</div>

						<Link className="buttonless-green bg-green mx-auto" to="join">
							LEARN MORE >
						</Link>
					</div>
				</div>
			</div>
		);
	};
	Drafts = () => {
		const content = [
			{
				title: 'Mainstream OER across UNESCO Member States',
				paragraphs: [
					'Our technology is being produced by three UNESCO Chairs and supports OER in its endeavors for global mainstreaming.',
					'Read the draft UNESCO Recommendation and exactly see where our technology allows you to be in line with this new international regulation.'
				],
				draft: ''
			},
			{
				title: 'Embracing your autorship',
				paragraphs: [
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
					'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
				],
				draft: ''
			}
		];
		return (
			<div className="drafts">
				{content.map((object, index) => {
					return (
						<div className={index % 2 ? 'bg-white' : 'bg-black'} key={index}>
							<div className="mx-auto">
								<div className={'row no-gutters'}>
									{CurrentWidth() < this.breakpoints.lg ? (
										<div className={'col-lg-6 m-0 p-0'}>
											{index !== 0 ? (
												<div
													className="background-kids"
													style={{ height: '80vw', width: '100%' }}
												></div>
											) : null}
										</div>
									) : (
										<div
											className={
												'col-lg-6 m-0 p-0' + (index % 2 ? ' order-last' : null)
											}
										>
											{index !== 1 ? (
												<div className="background-kids"></div>
											) : null}
										</div>
									)}

									<div
										className={
											'col-lg-6 m-0 p-0 ' +
											(index % 2 ? 'bg-white' : 'bg-black')
										}
									>
										<div
											className={
												'p-5 m-md-5 maxer-625 ' +
												(index % 2 ? 'float-right' : null)
											}
										>
											<h3 className={index % 2 ? 'text-purple' : 'text-white'}>
												{object.title}
											</h3>

											{object.paragraphs.map((p, index1) => {
												return (
													<p
														className={
															'my-3' +
															' ' +
															(index % 2 ? 'text-black' : 'text-white')
														}
														key={index1}
													>
														{p}
													</p>
												);
											})}
											<div className="button-green">Download Draft</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		);
	};

	UnescoJoin = () => {
		const style = 'col-12 col-lg-6 ';
		const join = {
			title: 'Join the Global Network Partnership',
			paragraphs: [
				'We aim to give a chance to unlock the digital potential of  OER, and to overcome OER discoverability, disparity and fragmentation and understand the world of OER in a more structured manner.',
				'The project proposes connecting all existing OER sites into a Global Network.  To do so, we suggest a pact that empowers all involved OER sites and players.'
			]
		};
		const unesco = {
			title: 'Mainstream OER across UNESCO Member States',
			paragraphs: [
				'Our technology is being produced by three UNESCO Chairs and supports OER in its endeavors for global mainstreaming.',
				'Read the draft UNESCO Recommendation and exactly see where our technology allows you to be in line with this new international regulation.'
			],
			draft: ''
		};
		return (
			<div className="unesco-join">
				<div className="row justify-content-center no-gutters">
					<div className={style + 'my-auto'}>
						<div
							className={
								'p-md-5 px-1 mx-4 py-5 m-md-5 maxer-625 float-lg-right'
							}
						>
							<Link to="/join">
								<h4 className="text-purple pb-3 mb-3">{join.title}</h4>
							</Link>
							{join.paragraphs.map((p, index1) => {
								return (
									<p className={'my-3 text-muted'} key={index1}>
										{p}
									</p>
								);
							})}
							<Link to="/join">
								<div className="buttonless-green mt-5 mb-md-0">LEARN MORE</div>
							</Link>
						</div>
					</div>
					<div
						className={
							style +
							'background-unesco pics-resp' +
							(CurrentWidth() < this.breakpoints.lg ? ' order-first' : '')
						}
					></div>
				</div>
				<div className="row justify-content-center no-gutters bg-black">
					<div className={style + 'background-join pics-resp'}></div>
					<div className={style + 'my-auto'}>
						<div
							className={'p-md-5 px-1 mx-4 py-5 m-md-5 maxer-625 text-white'}
						>
							<h4 className="pb-3 mb-3">{unesco.title}</h4>
							{join.paragraphs.map((p, index1) => {
								return (
									<p className={'my-3'} key={index1}>
										{p}
									</p>
								);
							})}
							<Link to="/policy">
								<div className="buttonless-green mb-4 mt-5">LEARN MORE</div>
							</Link>
							<div className="button-green mt-5 mb-md-0 mb-3">
								Download Draft
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};
	render() {
		return (
			<div className="wrapper">
				<this.Header />
				<div id="more" />
				<this.Description />
				<this.Ecosystem />
				<div id="products" />
				<MoreProducts padding={true} homepage={true} />
				{/* <this.Join /> */}
				{/* <this.Drafts /> */}
				<this.UnescoJoin />
				<this.Partners />
			</div>
		);
	}
}

export default Homepage;
