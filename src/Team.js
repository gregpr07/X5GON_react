import React from 'react';
import './css/bootstrap.css';
import './css/team.css';
import './css/animate.css';
import { Navbar, Footer } from './Components';

class Team extends React.Component {
	Team = () => {
		const contents = [
			{
				person: 'John Shawe-Taylor',
				position:
					'UNESCO Chair in Artificial Intelligence, University College London',
				photo: 'john.jpg'
			},
			{
				person: 'Mitja Jermol',
				position:
					'UNESCO Chair on Open Technologies for OER and Open Learning, Jozef Stefan Institute',
				photo: 'mitja.jpg'
			},
			{
				person: 'Colin de la Higuera',
				position:
					'UNESCO Chair in teacher training technologies with OER, University Nantes',
				photo: 'colin.jpg'
			},
			{
				person: 'Erik Novak',
				position:
					'Data Science Researcher, Artificial Intelligence Laboratory, Jozef Stefan Institute',
				photo: 'erik.jpg'
			},
			{
				person: 'Kristijan Percic',
				position: 'Innovation Sector, Slovenian Post Office',
				photo: 'kristijan.png'
			},
			{
				person: 'Gregor Žunič',
				position:
					'Graduate student, Artificial Intelligence Laboratory, Jozef Stefan Institute',
				photo: 'gregor.jpg'
			},
			{
				person: 'Davor Orlic',
				position: 'Chief Operating Officer, Knowledge 4 All Fundation',
				photo: 'davor.jpg'
			}
		];
		return (
			<div className="p-5 products" id="products">
				<div className="maxer mx-auto">
					<div className="">
						<div className="px-2">
							<h4 className="py-4 solutions text-white text-left">
								PEOPLE BEHIND
							</h4>
							<p className="description mb-md-5 text-white">
								Ut quis posuere mauris. Donec scelerisque auctor pulvinar.
							</p>
						</div>
						<div className="row p-2 pt-3">
							{contents.map((content, index) => {
								return (
									<div className="col-6 col-lg-3 col-md-4" key={index}>
										<div className="px-sm-3 mx-auto text-left">
											<img
												className="mx-auto"
												src={'imgs/team/' + content.photo}
												width="100%"
												alt={content.photo}
											/>

											<p className="text-white p2 mb-1 mt-3">
												{content.person}
											</p>
											<p style={{ color: 'rgba(255, 255, 255, 0.75)' }}>
												{content.position}
											</p>
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
			<div className="bg-sky">
				<Navbar />
				<this.Team />
				<Footer />
			</div>
		);
	}
}

export default Team;
