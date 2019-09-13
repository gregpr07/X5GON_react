import React from 'react';
import { Navbar } from '../Components';
import { Link } from 'react-router-dom';

export const StandardHeader = object => {
	object = object.object;
	const makeButton = object => {
		if (object.button) {
			if (object.button.link) {
				return (
					<Link to={object.button.link}>
						<div className="button-green">{object.button.text}</div>
					</Link>
				);
			} else if (object.button.externalLink) {
				return (
					<a href={object.button.externalLink} target="blank">
						<div className="button-green">{object.button.text}</div>
					</a>
				);
			} else {
				return (
					<Link to="#">
						<div className="button-green">{object.button.text}</div>
					</Link>
				);
			}
		} else {
			return null;
		}
	};
	return (
		<div className={object.background ? object.background : 'bg-sky'}>
			<Navbar />
			<div className="p-128 text-white maxer mx-auto">
				<div className="maxer-880">
					<div className="pl-4 ml-1 mx-auto">
						<p className="text-ecosystem text-white text-left pb-3 mb-0 pl-1">
							{object.subheader ? object.subheader : 'PRODUCT'}
						</p>
						<h1 className="text-white mt-3">{object.product}</h1>
						<h4 className="maxer-625 mb-5 mt-0 mt-md-3 pb-3">
							{object.description}
						</h4>
						{makeButton(object)}
					</div>
					{/* <div className="col-12 col-md-5">
						<div
							style={{
								background: 'white',
								height: '100%',
								width: '100%',
								borderRadius: '100px'
							}}
						></div>
					</div> */}
				</div>
			</div>
		</div>
	);
};
export const MakeParagraphs = contents => {
	contents = contents.object;
	return (
		<div className="row">
			{contents.map((list, index) => {
				return (
					<div className="col-12 col-md-12 text-muted">
						{list.map(paragraph => {
							return <p className="maxer-880 pr-3">{paragraph}</p>;
						})}
					</div>
				);
			})}
		</div>
	);
};
