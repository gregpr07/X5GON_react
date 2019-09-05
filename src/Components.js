import React, { useState, useEffect } from 'react';
import './css/bootstrap.css';
import './css/components.css';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import SmoothScroll from 'smooth-scroll';

// ACTIVE

export const Navbar = props => {
	const content = [
		{
			li: 'Products',
			link: '/#products'
		},
		{
			li: 'Join',
			link: '/join'
		},
		{
			li: 'Policy',
			link: '/policy'
		},
		{
			li: 'Team',
			link: '/team'
		}
	];
	// eslint-disable-next-line
	const scroll = new SmoothScroll('a[href*="#"]', {
		header: '#navbar',
		speed: 1500,
		speedAsDuration: true,
		offset: -1,
		easing: 'easeInOutQuad',
		clip: true,
		updateURL: true,
		popstate: false
	});
	return (
		<nav
			className={
				'navbar navbar-expand-sm navbar-' + (props.light ? 'light' : 'dark')
			}
		>
			<div className="navbar-brand">
				<Link to="" className="nav-link">
					<b>X5</b>GON
				</Link>
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
				<ul className="navbar-nav ml-auto">
					{content.map((li, index) => {
						return (
							<li className="nav-item active ml-lg-3" key={index}>
								<Link className="nav-link mx-md-2 x-xs-1" to={li.link}>
									{li.li}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};
export const EU = () => {
	return (
		<div className="maxer-800 mx-auto">
			<div className="m-0">
				<div className="row p-4 m-1 m-sm-3">
					<div className="row">
						<div className="col-md-3 col-5 m-0">
							<img alt="flag" src="/euflag.png" width="100%" className="m-0" />
						</div>
						<div className="col-md-9 col-7 m-0">
							<p className="my-auto m-0">
								This project has received funding from the European Union’s
								Horizon new policy 2020 research and innovation programme under
								grant agreement No 761758.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export const Footer = () => {
	const contents = {
		'GO-TO': [
			{
				page: 'Products',
				link: '/#products'
			},
			{
				page: 'Join',
				link: '/join'
			},
			{
				page: 'Policy',
				link: '/policy'
			},
			{
				page: 'Team',
				link: '/team'
			}
		],
		PRODUCTS: [
			{
				page: 'recommend',
				link: '/products/recommend'
			},
			{
				page: 'analytics',
				link: '/products/analytics'
			},
			{
				page: 'discovery',
				link: '/products/discovery'
			},
			{
				page: 'translate',
				link: '/products/translate'
			},
			{
				page: 'connect',
				link: '/products/connect'
			},
			{
				page: 'feed',
				link: '/products/feed'
			}
		],
		CONTACT: [
			{
				page: 'General Enquiries',
				link: 'mailto:info@x5gon.org'
			},
			{
				page: 'Partnering Projects',
				link: 'mailto:partnering@x5gon.org'
			},
			{
				page: 'Project Coordination',
				link: 'mailto:admin@x5gon.org'
			},
			{
				page: 'Press Enquiries',
				link: 'mailto:press@x5gon.org'
			}
		],
		SUPPORT: [
			{
				page: 'Cookies Subpage',
				link: 'Cookies Subpage'
			},
			{
				page: 'Documentation',
				link: 'https://platform.x5gon.org/docs/x5gon-docs.pdf'
			},
			{
				page: 'Privacy',
				link: '/privacy'
			}
		]
	};
	const UL = name => {
		name = name.name;
		return (
			<div
				className={
					'col-6 col-md-3 pl-0 pb-5 ' +
					((name === 'PRODUCTS' || name === 'CONTACT') && CurrentWidth() < 768
						? 'order-last'
						: null)
				}
			>
				<p className="bold">{name}</p>
				{contents[name].map((object, index) => {
					const style = 'd-block mt-2';
					if (name !== 'CONTACT') {
						return (
							<Link
								style={{ textTransform: 'capitalize' }}
								to={object.link}
								key={index}
								className={style}
							>
								{object.page}
							</Link>
						);
					} else {
						return (
							<a
								style={{ textTransform: 'capitalize' }}
								href={object.link}
								key={index}
								className={style}
							>
								{object.page}
							</a>
						);
					}
				})}
			</div>
		);
	};
	return (
		<div className="foot bg-black text-white">
			<div className="maxer mx-auto row p-5">
				<div className="col-md-3 col-lg-4 col-12 pl-0 pb-4 pb-md-0">
					<b>X5</b>GON
				</div>
				<div className="col-md-9 col-lg-8 col-12">
					<div className="row border-bottom">
						<UL name="GO-TO"></UL>
						<UL name="PRODUCTS"></UL>
						<UL name="CONTACT"></UL>
						<UL name="SUPPORT"></UL>
					</div>
					<div className="row mt-5">
						<div className="col-md-3 col-3 m-0 pl-0">
							<img alt="flag" src="/euflag.png" width="100%" className="m-0" />
						</div>
						<div className="col-9 m-0 col-xl-7">
							<p className="my-auto m-0 p-0">
								This project has received funding from the European Union’s
								Horizon new policy 2020 research and innovation programme under
								grant agreement No 761758.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export const MoreProducts = props => {
	let contents = [
		{
			todo: 'Recommend',
			text: 'Show your content in a network of other sites',
			link: 'recommend',
			image: 'recommend.png'
		},
		{
			todo: 'Analytics',
			text: 'Understand the trends of your content usage',
			link: '',
			image: 'analytics.png'
		},
		{
			todo: 'Discovery',
			text: 'Search and find materials from all over the world',
			link: 'discovery',
			image: 'discovery.png'
		},
		{
			todo: 'Translate',
			text: 'Translate your content in every format',
			link: '',
			image: 'translate.png'
		},
		{
			todo: 'Connect',
			text: 'Make your users connected to all OER sites in Moodle',
			link: '',
			image: 'connect.png'
		},
		{
			todo: 'Feed',
			text: 'Provide data for all stakeholders via API',
			link: 'feed',
			image: 'feed.png'
		}
	];
	const current = props.current;
	const CheckIfOthers = array => {
		array = array.filter(object => object.todo !== current);
		if (array.length < contents.length) {
			array.splice(0, 0, {
				empty: true
			});
		}

		return array;
	};
	return (
		<div
			className={'bg-sky px-4 products ' + (props.padding ? ' p-128' : null)}
			id="products"
		>
			<div className="maxer mx-auto">
				<div className="text-center px-lg-5">
					{props.homepage ? (
						<div className="homepage-present">
							<div className="mx-auto text-ecosystem text-white">
								OUR PRODUCTS
							</div>
							<div className="px-2">
								<h1 className="py-4 solutions text-white benefit-h1">
									Solutions for all Needs
								</h1>
								<p className="description mx-auto mb-md-5">
									Powered by one content recommendation technology
								</p>
							</div>
						</div>
					) : null}

					<div className="row px-2 pt-3">
						{CheckIfOthers(contents).map((content, index) => {
							if (content.empty) {
								return (
									<div
										className="col-12 col-sm-6 col-md-4 px-4 py-2 text-left"
										key={index}
									>
										<h4>Learn more about other our products.</h4>
									</div>
								);
							} else {
								return (
									<div
										className="col-12 col-sm-6 col-md-4 px-4 py-2"
										key={index}
									>
										<div className="card bg-white px-5 pb-5 pt-3 px-sm-3 mx-auto">
											<img
												className="mx-auto mb-3"
												src={'/imgs/illustrations/products/' + content.image}
												width="75%"
												alt="ecosystem"
											/>
											{/* <div
												className="mx-auto mb-5"
												style={{
													borderRadius: '50%',
													backgroundColor: '#4877ff',
													height: '150px',
													width: '150px'
												}}
											></div> */}
											<h5 className="text-purple-bold">{content.todo}</h5>
											<p className="text-muted px-3 m-0 p-0 under mx-auto">
												{content.text}
											</p>
											<div className="mt-3 mb-4">
												<Link to={'/products/' + content.link}>
													<div className="buttonless-green">LEARN MORE ></div>
												</Link>
											</div>
											<div className="pb-3">
												{content.link ? (
													<Link to={'/products/' + content.link}>
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
									</div>
								);
							}
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export const CurrentWidth = () => {
	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return width;
};
// UNFINISHED

// REMOVE IN FINAL VERSION
export const DisplayWidth = () => {
	return <div className="screen-width">{CurrentWidth()}</div>;
};

// DEPRECIATED
// eslint-disable-next-line
const Stats = () => {
	let stats_list = [
		{ Sites: { nr: 40, mul: '' } },
		{ Users: { nr: 1.8, mul: 'M' } },
		{ Resources: { nr: 91, mul: 'k' } }
	];
	return (
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
						<p className="row p-stats text-center mx-auto">{key}</p>
					</div>
				);
			})}
		</div>
	);
};
