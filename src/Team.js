import React from 'react';
import './css/bootstrap.css';
import './css/team.css';
import './css/animate.css';
import { Navbar } from './Components';

class Team extends React.Component {
	Team = () => {
		const contents = [
			{
				person: 'John Shawe-Taylor',
				position:
					'UNESCO Chair in Artificial Intelligence, University College London',
				photo: 'dicaprio1.jpg'
			},
			{
				person: 'Mitja Jermol',
				position:
					'UNESCO Chair on Open Technologies for OER and Open Learning, Jozef Stefan Institute',
				photo: 'dicaprio.jpg'
			},
			{
				person: 'Colin de la Higuera',
				position:
					'UNESCO Chair in teacher training technologies with OER, University Nantes',
				photo: 'dicaprio3.jpg'
			},
			{
				person: 'Erik Novak',
				position:
					'Data Science Researcher, Artificial Intelligence Laboratory, Jozef Stefan Institute',
				photo: ''
			},
			{
				person: 'Kristijan Percic',
				position: 'Innovation Sector, Slovenian Post Office',
				photo: ''
			},
			{
				person: 'Gregor Žunič',
				position:
					'Graduate student, Artificial Intelligence Laboratory, Jozef Stefan Institute',
				photo: ''
			},
			{
				person: 'Davor Orlic',
				position: 'Chief Operating Officer, Knowledge 4 All Fundation',
				photo: ''
			},
			{ person: 'Ime Priimek', position: '', photo: '' }
		];
		return (
			<div className="p-5 products" id="products">
				<div className="maxer mx-auto">
					<div className="p-lg-5">
						<div className="px-2">
							<h4 className="py-4 solutions text-white text-left">OUR TEAM</h4>
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
												style={{ borderRadius: '50%' }}
											/>
											<p className="text-purple p2">{content.person}</p>
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
