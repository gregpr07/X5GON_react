import React from 'react';
import './css/bootstrap.css';
import './css/components.css';
import { Link } from 'react-router-dom';

export const Navbar = props => {
	const content = [
		{
			li: 'Products',
			link: 'products'
		},
		{
			li: 'Our Team',
			link: 'team'
		},
		{
			li: 'Copyright',
			link: 'copyright'
		},
		{
			li: 'Contact us',
			link: 'contact'
		}
	];
	console.log('bg-');
	return (
		<nav
			className={
				'navbar navbar-expand-sm pl-4 navbar-' +
				(props.light ? 'light' : 'dark')
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
							<li className="nav-item active" key={index}>
								<Link className="nav-link mx-md-2 mx-xs-1" to={li.link}>
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
							<img alt="flag" src="euflag.png" width="100%" className="m-0" />
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
	const content = [
		[
			{
				what: 'General Enquiries',
				mail: 'info@x5gon.org'
			},
			{
				what: 'Project Coordination',
				mail: 'admin@x5gon.org'
			}
		],
		[
			{
				what: 'Partnering Projects and Industrial Relations',
				mail: 'partnering@x5gon.org'
			},
			{
				what: 'Press Enquiries',
				mail: 'press@x5gon.org'
			}
		]
	];
	return (
		<div style={{ backgroundColor: '#181b1c' }}>
			<div className="p-md-5 p-5 maxer-800 mx-auto footer">
				<h3 className="text-white mb-3">Contact</h3>

				<div>
					{content.map(div => {
						return (
							<div className="row">
								{div.map(obj => {
									return (
										<div className="col-12 col-sm-6 mb-4">
											<p className="m-0">{obj.what}</p>
											<a href={'mailto:' + obj.mail}>{obj.mail}</a>
										</div>
									);
								})}
							</div>
						);
					})}
					<Link to="privacy">Privacy</Link>
				</div>
				<p className="text-center w-100 mb-0 h6 mt-3">&copy; X5GON</p>
			</div>
		</div>
	);
};
