import React from 'react';
import './css/homepage.css';
import './css/bootstrap.css';
import { Link } from 'react-router-dom';
import { StandardHeader } from './products/ProductsComponents';

class Join extends React.Component {
	Form = () => {
		return (
			<div className="maxer mx-auto">
				<div
					className="application px-4 pb-128 maxer-500 mr-auto text-purple"
					id="form"
				>
					<h4>Application Form</h4>
					<p>
						Fill this form to register your OER repository and get resources
						used to connect to the X5GON OER network. Once connected, we will
						identify the resources you provide and include them into our
						recommendations making it visible within the OER network.
					</p>
					<form action="https://platform.x5gon.org/oer_provider" method="post">
						<h5>Repository Information</h5>

						<div className="form-group">
							<label htmlFor="oer-repository-name">OER Repository Name</label>
							<input
								type="text"
								className="form-control"
								id="oer-repository-name"
								name="name"
								aria-describedby="oer-repository-name-help"
								placeholder="Enter repository name"
								required=""
							/>
							<small
								id="oer-repository-name-help"
								className="form-text text-muted"
							>
								Name of the repository (ex. X5GON Platform)
							</small>
						</div>

						<div className="form-group">
							<label htmlFor="oer-repository-domain">Repository Domain</label>
							<input
								type="url"
								className="form-control"
								id="oer-repository-domain"
								name="domain"
								aria-describedby="oer-repository-domain-help"
								placeholder="Enter repository domain"
								required=""
							/>
							<small
								id="oer-repository-domain-help"
								className="form-text text-muted"
							>
								Domain where the repository resides (ex. platform.x5gon.org)
							</small>
						</div>

						<hr />

						<h5>Maintainer Information</h5>
						<div className="form-group">
							<label htmlFor="contact-email">Maintainer Contact</label>
							<input
								type="email"
								className="form-control"
								id="contact-email"
								name="contact"
								aria-describedby="contact-email-help"
								placeholder="Enter email"
								required=""
							/>
							<small id="contact-email-help" className="form-text text-muted">
								Person responsible for snippet integration at your institution
							</small>
						</div>

						<div
							id="g-recaptcha"
							aria-describedby="recaptcha-help"
							data-sitekey="6LeC3FoUAAAAAGcI3ZGRR93q6CzMwXPMxcIbycyE"
						>
							<div /* style="width: 304px; height: 78px;" */>
								<div>
									<iframe
										title="captcha"
										src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LeC3FoUAAAAAGcI3ZGRR93q6CzMwXPMxcIbycyE&amp;co=aHR0cHM6Ly9wbGF0Zm9ybS54NWdvbi5vcmc6NDQz&amp;hl=en&amp;v=v1566858990656&amp;size=normal&amp;cb=s6y1pzajobp"
										width="304"
										height="78"
										role="presentation"
										name="a-nco9cqpmfspc"
										frameBorder="0"
										scrolling="no"
										sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
									></iframe>
								</div>
								<textarea
									id="g-recaptcha-response"
									name="g-recaptcha-response"
									className="g-recaptcha-response d-none"
								></textarea>
							</div>
						</div>
						<small className="form-text">
							You need to activate reCAPTCHA to validate you are not a robot!
						</small>

						<div className="form-group">
							<small>
								Already a member of the OER Network?
								<Link to="/oer_provider/login">Login</Link>
							</small>
						</div>
						<div className="text-left">
							<button type="submit" className="button-green">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	};
	Description = () => {
		return (
			<div className="bg-white p-128 maxer mx-auto">
				<div className="mx-lg-1 px-4 offers">
					<h4 className="maxer-880 text-purple">
						X5GON's Recommendation increases user engagement across each of your
						content pages, improving visibility of your content.
					</h4>

					<this.Accordion></this.Accordion>
				</div>
			</div>
		);
	};
	Accordion = () => {
		const contents = [
			{
				title: 'What Can We Offer',
				subtitle:
					'Make the most out of your content by joining our platform and let us give you:',

				paragraphs: [
					'Cross-modal technologies for multimodal content understanding,',
					'Cross-site technologies to transparently accompany and analyse users across sites,',
					'Cross-domain technologies for cross domain content analytics,',
					'Cross-language technologies for cross lingual content recommendation,',
					'Cross-cultural technologies for cross cultural learning personalisation.'
				]
			},
			{
				title: 'How Can You Contribute',
				subtitle:
					'Get into a pact that empowers all involved OER stakeholders and allows OER sites:',

				paragraphs: [
					'To become a partner in our Global Network Partnership,',
					'To use our Connect Service as well as all other services,',
					'To give us access to content data and user behaviour data,',
					'To share content recommendations with other OER sites,',
					'To share with us the contacts of their IT managers.'
				]
			},
			{
				title: 'What Do We Promise',
				subtitle: 'In return we promise:',
				paragraphs: [
					'To use the X5GON platform to ingest your content and use state of the art technologies such as machine learning, machine translation, machine quality assurance, personalisation, learning analytics, to boost your content visibility and use,',
					'To create fair and inclusive cross-pollination of content to/from other OER sites to your site,',
					'To transparently work with you, and disclose algorithms and produce you with impact metrics,',
					'To not breach any data privacy, ethics or other data and artificial intelligence related boundaries.'
				]
			}
		];
		return (
			<div className="accordion pt-128" id="accordionExample">
				{contents.map((object, index) => {
					const targetID = 'collapse' + index + object.title.slice(0, 3);
					return (
						<div className="card" key={index}>
							<div className="card-header" id="headingOne">
								<div
									className="btn w-100 text-left .h4"
									data-toggle="collapse"
									data-target={'#' + targetID}
									aria-expanded="true"
									aria-controls={'collapse' + targetID}
								>
									<h4 className="mb-0 text-green">
										{object.title}
										<span
											id={targetID}
											className="float-right collapse show plus-minus"
										></span>
									</h4>
								</div>
							</div>
							<div
								id={targetID}
								className="collapse"
								aria-labelledby="headingOne"
							>
								<div className="card-body">
									<p className="text-purple-bold">{object.subtitle}</p>
									{object.paragraphs.map((paragraph, subindex) => (
										<p key={subindex} className="text-muted maxer-880">
											{paragraph}
										</p>
									))}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		);
	};

	render() {
		return (
			<div>
				<StandardHeader
					object={{
						background: 'bg-join-header',
						subheader: 'CONTRIBUTE',
						product: 'Join Forces',
						description:
							'We suggest a pact that empowers all involved OER sites and players.',
						button: {
							text: 'Fill in the Form',
							link: '#form'
						}
					}}
				/>
				<this.Description />
				<this.Form />
			</div>
		);
	}
}

export default Join;
