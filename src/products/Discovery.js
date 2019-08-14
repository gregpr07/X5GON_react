import React from 'react';
import '../css/bootstrap.css';
import { Link } from 'react-router-dom';
import { Navbar } from '../Components';

class Discovery extends React.Component {
	Header = () => {
		return (
			<div className="bg-pink">
				<Navbar />
				<div class="p-5 text-white text-center maxer mx-auto">
					<div class="container mb-5 mx-auto">
						<div class="row">
							<div class="col-xl-9 mx-auto">
								<h1 class="mb-5 text-white">Discovery</h1>
							</div>
							<div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
								<div class="form">
									<input
										type="email"
										className="form-control mb-3"
										placeholder={'Search for OER materials'}
									/>
									<Link to="/search">
										<div className="button-green mx-auto">Search</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};
	Description = () => {
		const contents = [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Erat nam at lectus urna duis convallis convallis. Nam aliquam sem et tortor. Eu turpis egestas pretium aenean pharetra. Id venenatis a condimentum vitae. Sit amet nisl purus in mollis. Amet consectetur adipiscing elit ut aliquam purus sit. Ante in nibh mauris cursus mattis molestie a. Vitae nunc sed velit dignissim sodales ut eu. Dolor sed viverra ipsum nunc. Tincidunt arcu non sodales neque sodales ut etiam sit. Gravida neque convallis a cras semper auctor neque vitae. Purus gravida quis blandit turpis cursus in. Sit amet cursus sit amet dictum. Nec ullamcorper sit amet risus nullam eget felis eget.',
			'Amet risus nullam eget felis eget nunc lobortis mattis aliquam. Proin nibh nisl condimentum id venenatis a condimentum. At tempor commodo ullamcorper a lacus. Cras semper auctor neque vitae tempus quam. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Id leo in vitae turpis massa sed elementum tempus egestas. Accumsan tortor posuere ac ut. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. In ante metus dictum at tempor. Venenatis urna cursus eget nunc. Mattis aliquam faucibus purus in massa. Viverra orci sagittis eu volutpat odio facilisis mauris sit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Tincidunt eget nullam non nisi.',
			'Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Faucibus pulvinar elementum integer enim. Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Sodales ut eu sem integer vitae justo eget. Elit ullamcorper dignissim cras tincidunt. Tortor pretium viverra suspendisse potenti nullam. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Fermentum dui faucibus in ornare quam viverra orci. Consequat nisl vel pretium lectus quam id leo in vitae. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Quisque egestas diam in arcu cursus euismod quis viverra. Diam sit amet nisl suscipit adipiscing bibendum. Feugiat vivamus at augue eget. Sed euismod nisi porta lorem. Orci porta non pulvinar neque. Vitae nunc sed velit dignissim sodales ut. At tempor commodo ullamcorper a lacus vestibulum. Posuere urna nec tincidunt praesent semper feugiat.'
		];
		return (
			<div className="bg-white p-lg-5">
				<div className="maxer mx-auto">
					<div className="text-center mx-4 p-sm-2">
						<div>
							<h1 className="py-4 benefit-h1 pb-lg-5">How to use?</h1>
						</div>
						{contents.map((content, index) => {
							const style = 'col-12 col-sm-6 my-auto text-lg-left';
							return (
								<div className="row py-3 h-100" key={index}>
									<div className={style}>
										<img src={'../ecosystem.png'} width="50%" alt="ecosystem" />
									</div>

									<div className={style}>
										<div className="width-limit">
											<p className="py-3 pb-lg-0">{content}</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	};

	render() {
		return (
			<div>
				<this.Header />
				<this.Description />
			</div>
		);
	}
}

export default Discovery;
