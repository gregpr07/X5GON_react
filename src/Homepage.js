import React from 'react';
import './css/bootstrap.css';
import './css/homepage.css';
import './css/animate.css';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import ScrollAnimation from 'react-animate-on-scroll';
import { Navbar, EU } from './Components';

class Homepage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			screenWidth: null,
			shouldChangeElementsDef: null
		};
	}

	breakpoints = { sm: 576, md: 768, lg: 992, xl: 1200 };

	// FUNCTIONS
	componentDidMount = () => {
		this.updateScreenSize();
		window.addEventListener('resize', this.updateScreenSize);
	};

	componentWillUnmount = () => {
		window.removeEventListener('resize', this.updateScreenSize);
	};

	updateScreenSize = () => {
		this.setState({
			screenWidth: window.innerWidth,
			shouldChangeElementsDef: window.innerWidth >= this.breakpoints.md
		});
	};

	// COMPONENTS
	Header = () => {
		let stats_list = [
			{ Sites: { nr: 40, mul: '' } },
			{ Users: { nr: 1.8, mul: 'M' } },
			{ Resources: { nr: 82, mul: 'k' } }
		];
		return (
			<header className="header bg-purple h-100 ">
				<Navbar />

				<div className="maxer mx-auto pt-1 ">
					<div className="px-md-4 px-0 pb-5">
						<div className="row py-3 py-sm-4 py-md-5 mx-0">
							<div className="col-md-12 col-lg-7">
								<div className="main-content px-md-4 mx-md-4 pl-4 pr-5 mr-md-5">
									<h1 className="text-white main-h1 mb-3 pl-md-0">
										Connecting{' '}
										{this.state.shouldChangeElementsDef
											? 'Open Education Resources'
											: 'OER'}{' '}
										in a Smart Way!
									</h1>
									<p className="text-muted-resp my-lg-5">
										Supported by advanced technology we are building World's
										first ecosystem connecting OER sites for the collective
										benefit of everyone, everywhere.
									</p>
								</div>

								{this.state.shouldChangeElementsDef ? (
									<div className="row pr-5 mr-lg-5 ml-md-4 pl-0 pt-3 pt-lg-0">
										{stats_list.map((object, index) => {
											let key = Object.keys(object)[0];
											return (
												<div className="col-auto mx-auto mr-xl-4" key={key}>
													<h4 className={'row h-stats'}>
														<CountUp
															end={object[key].nr}
															duration={2 + index / 2}
															decimals={key === 'Users' ? 1 : 0}
														/>
														{object[key].mul}
													</h4>
													<p className="row p-stats text-center mx-auto">
														{key}
													</p>
												</div>
											);
										})}
									</div>
								) : null}
							</div>
							<div className="col-md-12 col-lg-5 mt-4 mt-md-3 mt-lg-0 mx-0">
								<div className="img-front mx-auto pr-lg-5 pr-1 mt-lg-4">
									<img
										src={'image-front-2.png'}
										className="img-front animated slideInDown slower"
										width="95%"
										alt="amazigess"
									/>
								</div>
							</div>
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
				text:
					'With AI discoverability of OER repositories we are now linking hundreds of thousands of scholarly articles, text books, videos, documents and databases.'
			},
			{
				title: 'Relevant and Tailormade',
				text:
					'With Machine Learning for Quality Assurancee we are semantically connecting, ranking and personalizing OER depending on users and content patterns.'
			},
			{
				title: 'Global and Truly Inclusive',
				text:
					'With Machine Translation for all content types we are offering high quality multi lingual translation of open content including videos, textbooks and documents.'
			}
		];
		return (
			<div className="bg-light p-lg-5 description">
				<div className="maxer mx-auto">
					<div className="row pl-4 pr-5 py-5 p-sm-5 mt-xs-5 m-0">
						{contents.map((col, index) => {
							return (
								<div className="col-sm-4" key={index}>
									<p className="text-purple content1-title">{col.title}</p>
									<p className="text-muted desc-box">{col.text}</p>
								</div>
							);
						})}
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
				}
			},
			{
				group: 'Teachers',
				text:
					'X5GON products gives you the ability to access OER material quickly and across multiple subjects. It allows you to design, browse, discover, collaborate on and publish your own materials.',
				more: {
					title: 'Find fast and reuse',
					p:
						'We take you one step further, offering an “export/import model” with cross-lingual search and cross-site options to provide visibility of your own content in your community, and finally help you to find and compile quality classroom materials quickly. '
				}
			},
			{
				group: 'Institutions',
				text:
					'Our ecosystem can be used as an infrastructure that transforms quality, institutional level structured and unstructured content into a dynamically evolving knowledge graph that quantifies complex relationships between content and users or learners via the enrichment of concepts in multiple languages, modalities and formats.',
				more: {
					title: 'Unlock and Connect',
					p:
						'We take your institution one step further, allowing you to push content out of your repository, create equity and multiply impact and usage of your material.  Most importantly, we can connect your OER repo with your Moodle installation.'
				}
			},
			{
				group: 'Researchers',
				text:
					'X5GON  allows access to OER data for the world of data science and research to create more value via reuse and repurpose of data. We have a suite of data streams to bring OER content and features to your hackathon, repository, institution, website and apps.',
				more: {
					title: 'Build on Top',
					p:
						'Use our platform to discover and curate OER content, and easily distribute and display those OERs in your apps. In your mobile apps, we make it easy to work with the X5GON API and even integrate to grow your project, business or repository around OER content.'
				}
			},
			{
				group: 'Goverments',
				text:
					'X5GON thrives on interconnecting national repositories, uncovering and enriching content and discovering unexpected relationships. We are developing the most accessible, comprehensive platform for government funded OER in order to support the next generation of global digital education equity.',
				more: {
					title: 'Maximize Equity',
					p:
						'Our ecosystem can give you an insight how your publicly funded resources are getting used. Understand how your citizens are overcoming challenges to engage with publicly funded resources, how local businesses are building on your data and showcase the impact of your investments and political decisions.'
				}
			}
		];
		return (
			<div className="bg-white p-lg-5 ecosystem">
				<div className="maxer mx-auto">
					<div className="text-center m-4 m-sm-5 p-sm-2">
						<div className="mx-auto text-ecosystem">ECOSYSTEM</div>
						<div>
							<h1 className="py-4 benefit-h1 pb-lg-5">Who Can Benefit?</h1>
						</div>
						{contents.map((content, index) => {
							const style = 'col-12 col-sm-6 my-auto text-lg-left';
							return (
								<div className="row py-3 h-100" key={index}>
									<div
										className={
											index % 2 !== 0 &&
											this.state.screenWidth >= this.breakpoints.sm
												? 'order-last ' + style
												: style
										}
									>
										<ScrollAnimation animateIn="fadeIn" animateOnce={true}>
											<img src={'ecosystem.png'} width="100%" alt="ecosystem" />
										</ScrollAnimation>
									</div>

									<div className={style}>
										<ScrollAnimation
											animateIn="fadeInUp"
											animateOnce={true}
											duration={1}
											delay={250}
										>
											<div className="width-limit">
												<h2 className="text-lg-left">{content.group}</h2>
												<p className="py-3 pb-lg-0">{content.text}</p>

												{this.state.screenWidth >= this.breakpoints.lg ? (
													<div>
														<p className="more-title my-0">
															{content.more.title}
														</p>
														<p>{content.more.p}</p>
													</div>
												) : (
													<div className="align-middle button-green mx-auto">
														Read more
													</div>
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
	Products = () => {
		let contents = [
			{
				todo: 'Recommend',
				text: 'Show your content in a network of other sites',
				link: ''
			},
			{
				todo: 'Analytics',
				text: 'Understand the trends of your content usage',
				link: ''
			},
			{
				todo: 'Discovery',
				text: 'Search and find materials from all over the world',
				link: 'search'
			},
			{
				todo: 'Translate',
				text: 'Translate your content in every format',
				link: ''
			},
			{
				todo: 'Connect',
				text: 'Make your users connected to all other OER sites',
				link: ''
			},
			{
				todo: 'Feed',
				text: 'Provide data for all stakeholders',
				link: 'feed'
			}
		];
		return (
			<div className="bg-green p-4 products" id="products">
				<div className="maxer mx-auto">
					<div className="text-center p-lg-5">
						<div className="mx-auto text-ecosystem text-white">
							OUR PRODUCTS
						</div>
						<div className="px-2">
							<h1 className="py-4 solutions text-white">
								Solutions for all Needs
							</h1>
							<p className="description mx-auto mb-md-5">
								Powered by one content recommendation technology
							</p>
						</div>
						<div className="row p-2 pt-3">
							{contents.map((content, index) => {
								return (
									<div className="col-12 col-sm-6 col-md-4 px-3" key={index}>
										<div className="card bg-dark p-5 px-sm-3 mx-auto mb-4">
											<img
												className="mx-auto mb-3"
												src={'ecosystem.png'}
												width="75%"
												alt="ecosystem"
											/>
											<ScrollAnimation
												animateIn="fadeIn"
												animateOnce={true}
												className="h-100"
											>
												<h3 className="text-white">{content.todo}</h3>
												<p className="text-muted px-3 py-2">{content.text}</p>
												<div className="mt-auto">
													{content.link ? (
														<Link to={content.link}>
															<div className="button-green mx-auto mt-auto">
																Try Now
															</div>
														</Link>
													) : (
														<div className="button-green mx-auto mt-auto">
															Try Now
														</div>
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
			</div>
		);
	};
	Join = () => {
		const content = {
			title: 'Join forces in the X5GON Global Network Partnership',
			text: [
				'We aim to give a chance to unlock the digital potential of  OER, and to overcome OER discoverability, disparity and fragmentation and understand the world of OER in a more structured manner.',
				'The project proposes connecting all existing OER sites into a Global Network.  To do so, we suggest a pact that empowers all involved OER sites and players.'
			]
		};
		const style = 'col-12 col-sm-6 my-auto';
		return (
			<div className="maxer mx-auto ">
				<div className="row p-4 m-1 p-md-5 m-sm-3 h-100 join">
					<div
						className={
							this.state.screenWidth >= this.breakpoints.sm
								? 'order-last ' + style
								: style
						}
					>
						<img src={'ecosystem.png'} width="100%" alt="ecosystem" />
					</div>

					<div className={style + ' width-limit mr-auto'}>
						<h2 className="text-purple mb-lg-4">{content.title}</h2>
						{content.text.map((p, index) => {
							return (
								<p className="text-muted" key={index}>
									{p}
								</p>
							);
						})}

						<div className="button-green bg-green mx-auto mt-lg-4">
							Join now
						</div>
						<div className="button-green mx-auto">Read more</div>
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
		return (
			<div className="maxer mx-auto">
				<div className="p-4 products" style={{ height: '500px' }}>
					<div className="text-center p-lg-5">
						<div className="mx-auto text-ecosystem text-purple">
							OUR PARTNERS
						</div>
					</div>
				</div>
			</div>
		);
	};
	Unesco = () => {
		const content = {
			title: 'UNESCO Guidelines',
			text: [
				'In November 2019 UNESCO’s General Assembly will adopt the OER Recommendation policy that will enable 193 Member States to acknowledge and create implementation policies for OER.',
				'This technology has been designed as a technical means to immediately showcase the national and institutional value on a Global scale and to be implemented quickly and be used as a support mechanism for stakeholders and this new policy.'
			]
		};
		const style = 'col-12 col-sm-6 my-auto';
		return (
			<div className="bg-blue">
				<div className="maxer mx-auto">
					<div className="row p-3 p-md-5 m-0 h-100">
						<div
							className={
								this.state.screenWidth <= this.breakpoints.sm
									? 'order-last ' + style
									: style
							}
						>
							<img src={'unesco.png'} width="100%" alt="unesco" />
						</div>

						<div className={style}>
							<p className="text-purple-normal text-center text-sm-left">
								JOIN EQUITY
							</p>
							<h2 className="text-purple-normal mb-4 text-center text-sm-left">
								{content.title}
							</h2>
							{content.text.map((p, index) => {
								return (
									<p
										className="text-purple-normal text-center text-sm-left"
										key={index}
									>
										{p}
									</p>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		);
	};
	render() {
		return (
			<div className="wrapper">
				<div className="screen-width">{this.state.screenWidth}</div>
				<this.Header />
				<this.Description />
				<this.Ecosystem />
				<this.Products />
				<this.Join />
				<this.Offers />
				<this.Partners />
				<this.Unesco />
				<EU />
			</div>
		);
	}
}

export default Homepage;
