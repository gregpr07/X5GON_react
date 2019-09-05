import React from 'react';
import { Navbar } from '../Components';

export const StandardHeader = object => {
	object = object.object;
	return (
		<div className="bg-sky">
			<Navbar />
			<div className="p-128 text-white maxer mx-auto">
				<div className="row">
					<div className="col-12 col-md-7">
						<div className="pl-4 ml-1 mx-auto">
							<p className="text-ecosystem text-white text-left pb-3 mb-0">
								PRODUCT
							</p>
							<h1 className="text-white mt-3">{object.product}</h1>
							<h4 className="maxer-625 mb-5 mt-3 pb-3">{object.description}</h4>
							<div className="button-green">{object.button.text}</div>
						</div>
					</div>
					<div className="col-12 col-md-5 bg-white">
						<div
							style={{
								background: 'white',
								height: '100%',
								width: '100%',
								borderRadius: '100px'
							}}
						></div>
					</div>
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
					<div className="col-12 col-md-6 text-muted">
						{list.map(paragraph => {
							return <p className="maxer-540 pr-3">{paragraph}</p>;
						})}
					</div>
				);
			})}
		</div>
	);
};
