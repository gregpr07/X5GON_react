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
