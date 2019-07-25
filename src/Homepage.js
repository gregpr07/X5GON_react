import React from 'react';
import './css/bootstrap.css';
import './css/homepage.css';
import { Link } from 'react-router-dom';

class Homepage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			screenWidth: null,
			shouldChangeElementsDef: null
		};
	}

	breakpoints = { sm: 576, md: 768, lg: 992, xl: 1200 };

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
	Navbar = () => {
		return (
			<nav className="navbar navbar-expand-sm navbar-dark pl-4">
				<div className="navbar-brand">
					<b>X5</b>GON
				</div>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarText"
					aria-controls="navbarText"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon">
						<i className="fa fa-navicon" />
					</span>
				</button>
				<div className="collapse navbar-collapse" id="navbarText">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<Link to="search" className="nav-link ml-md-3">
								Product
							</Link>
						</li>
					</ul>
					<ul className="navbar-nav ml-auto">
						{['Our Team', 'Legal', 'Copyright', 'Contact us'].map(li => {
							return (
								<li className="nav-item active" key={li}>
									<a className="nav-link mx-md-2 mx-xs-1" href={li}>
										{li}
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</nav>
		);
	};
	Header = () => {
		let stats_list = [{ Users: '1,8M' }, { Sites: 40 }, { Resources: '84k' }];
		return (
			<header className="header bg-purple pt-1">
				<this.Navbar />
				<div className="px-4 pb-5">
					<div className="row py-3 py-sm-4 py-md-5">
						<div className="col-md-12 col-lg-7">
							<div className="px-md-4 mx-md-4 pl-4 pr-5">
								<h1 className="text-white main-h1 mb-3">
									Connecting{' '}
									{this.state.shouldChangeElementsDef
										? 'Open Education Resources'
										: 'OER'}{' '}
									in a Smart Way!
								</h1>
								<p className="text-muted-resp">
									Supported by advanced technology we are building World's first
									ecosystem connecting OER sites for the collective benefit of
									everyone, everywhere.
								</p>
							</div>

							{this.state.shouldChangeElementsDef ? (
								<div className="row text-green px-5 mx-md-5 pt-3 pt-lg-0">
									{stats_list.map(object => {
										let key = Object.keys(object)[0];
										return (
											<div className="col" key={key}>
												<h4 className="row">{object[key]}</h4>
												<h5 className="row">{key}</h5>
											</div>
										);
									})}
								</div>
							) : null}
						</div>
						<div className="col-md-12 col-lg-5 mt-4 mt-md-3 mt-lg-0">
							<div className="img-front mx-auto">
								{this.state.shouldChangeElementsDef ? (
									<img
										src={'image-front.png'}
										className="img-front"
										width="100%"
										alt="amazingngess"
									/>
								) : (
									<img
										src={'image-front-2.png'}
										className="img-front-2"
										width="100%"
										alt="amazigess"
									/>
								)}
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
				title: 'AI discoverability of OER repositories',
				text:
					'OER is not fragmented across many sites, disciplines and modalities anymore. We are linking hundreds of thousands of scholarly articles, text books, videos, documents and databases.'
			},
			{
				title: 'Machine learning for quality assurance and personalization',
				text:
					'OER is now relevant and tailor-made for everyone. We are semantically connecting, ranking and personalizing it depending on user and content patterns.'
			},
			{
				title: 'Machine Translation for all content types',
				text:
					'OER is now global and truly inclusive as it comes from everywhere in the world. We are offering high quality multi lingual translation of open content including videos, textbooks and documents.'
			}
		];
		return (
			<div className="bg-light p-lg-5">
				screenWidth: {this.state.screenWidth}
				<div className="row text-sm-center pl-4 pr-5 py-5 p-sm-5 mt-xs-5 m-0">
					{contents.map((col, index) => {
						return (
							<div className="col-sm-4" key={index}>
								<p className="text-purple content1-title">{col.title}</p>
								<p className="text-muted">{col.text}</p>
							</div>
						);
					})}
				</div>
			</div>
		);
	};
	Ecosystem = () => {
		let contents = [
			{
				group: 'Learners',
				text:
					'Our products gives everyone the ability to learn, discover, compile playlists and make notes to solve problems.'
			},
			{
				group: 'Teachers',
				text:
					'X5GON products gives you the ability to access OER material quickly and across multiple subjects. It allows you to design, browse, discover, collaborate on and publish your own materials.'
			},
			{
				group: 'Institutions',
				text:
					'Our ecosystem can be used as an infrastructure that transforms quality, institutional level structured and unstructured content into a dynamically evolving knowledge graph that quantifies complex relationships between content and users or learners via the enrichment of concepts in multiple languages, modalities and formats.'
			},
			{
				group: 'Researchers',
				text:
					'X5GON  allows access to OER data for the world of data science and research to create more value via reuse and repurpose of data. We have a suite of data streams to bring OER content and features to your hackathon, repository, institution, website and apps.'
			},
			{
				group: 'Goverments',
				text:
					'X5GON thrives on interconnecting national repositories, uncovering and enriching content and discovering unexpected relationships. We are developing the most accessible, comprehensive platform for government funded OER in order to support the next generation of global digital education equity.'
			}
		];
		return (
			<div className="bg-white p-lg-5 ecosystem">
				<div className="text-center m-4 m-sm-5 p-sm-2">
					<div className="mx-auto text-ecosystem">ECOSYSTEM</div>
					<div>
						<h1 className="py-4">
							Who Can Benefit
							{this.state.shouldChangeElementsDef ? ' from our products' : '?'}
						</h1>
					</div>
					{contents.map((content, index) => {
						const style = 'col-12 col-sm-6 my-auto';
						return (
							<div className="row py-3 h-100" key={index}>
								<div
									className={
										index % 2 === 0 &&
										this.state.screenWidth >= this.breakpoints.sm
											? 'order-last ' + style
											: style
									}
								>
									<img src={'ecosystem.png'} width="100%" alt="ecosystem" />
								</div>

								<div className={style}>
									<h2>{content.group}</h2>
									<p className="py-3">{content.text}</p>
									<div className="align-middle button-green mx-auto">
										Read more
									</div>
								</div>
							</div>
						);
					})}
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
				link: ''
			}
		];
		return (
			<div className="bg-green p-4 products">
				<div className="text-center p-lg-5">
					<div className="mx-auto text-ecosystem text-white">OUR PRODUCTS</div>
					<div className="px-2">
						<h1 className="py-4 solutions">Solutions for all Needs</h1>
						<p className="description">
							Powered by one content recommendation technology
						</p>
					</div>
					<div className="row p-2">
						{contents.map((content, index) => {
							return (
								<div className=" col-12 col-sm-6 col-md-4 px-3" key={index}>
									<div className="card p-5 px-sm-3 mx-auto mb-4">
										<img
											className="mx-auto mb-3"
											src={'ecosystem.png'}
											width="75%"
											alt="ecosystem"
										/>
										<h3>{content.todo}</h3>
										<p className="text-muted px-3 py-2">{content.text}</p>
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
								</div>
							);
						})}
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

				<div className={style}>
					<h2 className="text-purple">{content.title}</h2>
					{content.text.map((p, index) => {
						return (
							<p className="text-muted" key={index}>
								{p}
							</p>
						);
					})}

					<div className="button-green bg-green mx-auto">Join now</div>
					<div className="button-green mx-auto">Read more</div>
				</div>
			</div>
		);
	};
	render() {
		return (
			<div>
				<this.Header />
				<this.Description />
				<this.Ecosystem />
				<this.Products />
				<this.Join />
			</div>
		);
	}
}

export default Homepage;
