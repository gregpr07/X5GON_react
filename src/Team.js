import React from 'react';
import './css/bootstrap.css';
import './css/team.css';
import './css/animate.css';
import { Navbar } from './Components';

class Team extends React.Component {
	Team = () => {
		const contents = [
			{ person: 'Erik Novak', position: '"The Beard"', photo: 'dicaprio1.jpg' },
			{
				person: 'Gregor Žunič',
				position: '"The Youngster"',
				photo: 'dicaprio.jpg'
			},
			{
				person: 'Davor Orlič',
				position: '"The Godfather"',
				photo: 'dicaprio3.jpg'
			},
			{ person: 'Ime Priimek', position: '', photo: '' },
			{ person: 'Ime Priimek', position: '', photo: '' },
			{ person: 'Ime Priimek', position: '', photo: '' },
			{ person: 'Ime Priimek', position: '', photo: '' },
			{ person: 'Ime Priimek', position: '', photo: '' }
		];
		return (
			<div className="p-5 products" id="products">
				<div className="maxer mx-auto">
					<div className="p-lg-5">
						<div className="px-2">
							<h1 className="py-4 solutions text-white text-left">OUR TEAM</h1>
							<p className="description mb-md-5 text-white">
								Ut quis posuere mauris. Donec scelerisque auctor pulvinar.
							</p>
						</div>
						<div className="row p-2 pt-3">
							{contents.map((content, index) => {
								return (
									<div className="col-4 col-md-3" key={index}>
										<div className="px-sm-3 mx-auto card text-center">
											<img
												className="mx-auto mb-3"
												src={content.photo}
												width="75%"
												alt="ecosystem"
											/>
											<p className="text-purple">{content.person}</p>
											<p className="text-muted">{content.position}</p>
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
	render() {
		return (
			<div className="bg-green">
				<Navbar />
				<this.Team />
			</div>
		);
	}
}

export default Team;
