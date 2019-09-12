import React from 'react';
import './css/bootstrap.css';
import './css/feed.css';
import './css/animate.css';
import { Navbar } from './Components';

class Privacy extends React.Component {
	Privacy = () => {
		return (
			<div className="maxer mx-auto p-5 text-purple">
				<h1>Privacy Policy</h1>
				<p className="information">
					The X5GON project is creating a solution that will help users/students
					find what they need not just in Open Educational Resources (OER)
					repositories, but across all open educational resources on the web.
					This solution will adapt to the user’s needs and learn how to make
					ongoing customized recommendations and suggestions through a truly
					interactive and impactful learning experience. This new AI-driven
					platform will deliver OER content from everywhere, for the students’
					need at the right time and place.
				</p>
				<h4 className="mt-5">About the Data We Collect</h4>
				<p className="information">
					Within the project we collect learning materials data that are openly
					licensed, and user activity data that is acquired by the X5GON snippet
					integrated in different OER repositories. The user data we acquire
					through the snippet is anonimized and consists of the following
					values:
				</p>
				<ul className="user-attributes">
					<li>
						<strong>User ID.</strong> This value is the identifier of the user
						accessing the learning material. It is created using the X5GON
						snippet and stored as a cookie in the users browser. The value is
						randomly generated, anonimized, and cannot be used to get back to
						the user.
					</li>
					<li>
						<strong>Material URL.</strong> This value is the material identifier
						and the link that the user visited.
					</li>
					<li>
						<strong>Referrer URL.</strong> This URL is the link from which the
						user arrived to the material.
					</li>
					<li>
						<strong>Access Date.</strong> The date at which the material was
						accessed.
					</li>
					<li>
						<strong>User Agents.</strong> This attribute contains information
						about the techonology the user used to access the material.
					</li>
					<li>
						<strong>Language.</strong> The language configuration used in users
						technology.
					</li>
					<li>
						<strong>User Location.</strong> The geographical location from which
						the user accessed the material, e.g. city, country and continent.
						<b> NOTE:</b> This value will be calculated using the users IP. The
						user IP is
						<b> NOT</b> stored in our databases.
					</li>
				</ul>
				<p className="information">
					For more information about the acquired data access the X5GON snippet
					documentation available{' '}
					<a href="/docs/x5gon-docs.pdf" target="_blank">
						HERE
					</a>
					.
				</p>
				<h4 className="mt-5">How is the Data Processed</h4>
				<p className="information">
					The acquired user data is used to identify users learning interests
					and give personalized recommendations. The material URL, refferer URL,
					access date and language will be given to the learning analytics
					engine and recommendation engine which will return a list of learning
					materials that the user might be interested in. Additionally, it will
					be used to identify which OER materials are highly requested and
					frequently viewed (giving an indication of its quality), and to find
					learning pathways, e.g. sequence of materials the users tend to
					follow.
				</p>
				<p className="information">
					User agents value is used to distinguish data of real users from bots
					allowing us to improve learning analytics and recommendation results
					by using only real users data.
				</p>
				<h4 className="mt-5">How Can a User Stop Participating</h4>
				<p className="information">
					To stop participating the user can delete the cookie named{' '}
					<b> x5gonTrack</b> which contains the user generated ID. This can be
					done in the the users browser. In addition, on the OER repositories
					that are a member of the X5GON Network, you must disable providing
					your user activity information.
					<b> NOTE:</b> this will also stop giving the user personalized
					recommendations on OER repositories that included the X5GON snippet.
				</p>
				<h4 className="mt-5">Who are Processing Your Data</h4>
				<p className="information">
					Your data is processed by the X5GON Project consortium which include:
				</p>
				<ul className="project-partners">
					<li>
						<a
							className="text-uppercase"
							href="https://www.ucl.ac.uk/"
							target="blank"
						>
							University College London
							<span className="link">
								<i className="fas fa-external-link-alt" />
							</span>
						</a>
					</li>
					<li>
						<a
							className="text-uppercase"
							href="https://www.ijs.si/ijsw"
							target="blank"
						>
							Institut Jožef Stefan
							<span className="link">
								<i className="fas fa-external-link-alt" />
							</span>
						</a>
					</li>
					<li>
						<a
							className="text-uppercase"
							href="http://www.k4all.org/"
							target="blank"
						>
							Knowledge 4 All Foundation
							<span className="link">
								<i className="fas fa-external-link-alt" />
							</span>
						</a>
					</li>
					<li>
						<a
							className="text-uppercase"
							href="http://www.univ-nantes.fr/english-version/welcome-to-universite-de-nantes-714591.kjsp"
							target="blank"
						>
							Université de Nantes
							<span className="link">
								<i className="fas fa-external-link-alt" />
							</span>
						</a>
					</li>
					<li>
						<a
							className="text-uppercase"
							href="https://www.posta.si/zasebno"
							target="blank"
						>
							Posta Slovenije
							<span className="link">
								<i className="fas fa-external-link-alt" />
							</span>
						</a>
					</li>
					<li>
						<a
							className="text-uppercase"
							href="http://www.upv.es/index-en.html"
							target="blank"
						>
							Universitat Politecnica de Valencia
							<span className="link">
								<i className="fas fa-external-link-alt" />
							</span>
						</a>
					</li>
					<li>
						<a
							className="text-uppercase"
							href="https://www.uni-osnabrueck.de/en/home.html"
							target="blank"
						>
							Universitaet Osnabrueck
							<span className="link">
								<i className="fas fa-external-link-alt" />
							</span>
						</a>
					</li>
					<li>
						<a
							className="text-uppercase"
							href="http://www.mizs.gov.si/"
							target="blank"
						>
							Ministry of Education of Slovenia
							<span className="link">
								<i className="fas fa-external-link-alt" />
							</span>
						</a>
					</li>
				</ul>
			</div>
		);
	};
	render() {
		return (
			<div>
				<Navbar light={true} />
				<this.Privacy />
			</div>
		);
	}
}

export default Privacy;
