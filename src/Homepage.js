import React from 'react';
import './css/bootstrap.css';
import './css/homepage.css';
import { Link } from 'react-router-dom';

class Homepage extends React.Component {
	Navbar = () => {
		return (
			<nav className="navbar navbar-expand-sm navbar-dark">
				<div className="navbar-brand">X5GON</div>
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
						<div className="col-md-12 col-lg-6">
							<div className="px-md-5 mx-md-5 px-md-5 pl-4 pr-5">
								<h1 className="text-white">
									Connecting Open Education Resources in a Smart Way!
								</h1>
								<p className="text-muted-resp">
									Supported by advanced technology we are building World's first
									ecosystem connecting OER sites for the collective benefit of
									everyone, everywhere.
								</p>
							</div>
							<div className="row text-green px-5 mx-md-5">
								{stats_list.map(object => {
									let key = Object.keys(object)[0];
									return (
										<div className="col" key={key}>
											<div className="row h4">{object[key]}</div>
											<div className="row h5">{key}</div>
										</div>
									);
								})}
							</div>
						</div>
						<div className="col-md-12 col-lg-6 mt-4 mt-md-3 mt-lg-0">
							<div className="img-front mx-auto">
								<img
									src={'image-front.png'}
									className="img-front d-none d-md-block"
									width="100%"
									alt="amazingngess"
								/>
							</div>
							<div className="img-front mx-auto">
								<img
									src={'image-front-2.png'}
									className="img-front-2 d-md-none"
									width="100%"
									alt="amazigess"
								/>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	};
	Content1 = () => {
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
			<div className="bg-light">
				<div class="row text-sm-center p-5 m-lg-5 mt-xs-5">
					{contents.map(col => {
						return (
							<div class="col-sm-4">
								<p className="text-purple content1-title">{col.title}</p>
								<p className="text-muted">{col.text}</p>
							</div>
						);
					})}
				</div>
			</div>
		);
	};
	render() {
		return (
			<div>
				<this.Header />
				<this.Content1 />
			</div>
		);
	}
}

export default Homepage;
