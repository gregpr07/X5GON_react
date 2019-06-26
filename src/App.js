import React from 'react';
import './App.css';
import './css/bootstrap.css';

let site_api = 'https://platform.x5gon.org/api/v1/';

let wordlist = [];
fetch('recommendation_words.json').then(function(resp) {
	return resp.json().then(function(data) {
		wordlist = data.words;
	});
});

/* https://platform.x5gon.org/api/v1/search?text=asd&page=2&type=all */

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			search_key: '',
			api_search: {
				query: {},
				rec_materials: [],
				metadata: {}
			},
			isLoaded: false,
			showRecommendations: false,
			ShowNrOfSearches: false
		};
	}

	searchComponent = () => {
		if (this.state.search_key) {
			fetch(site_api + 'search?text=' + this.state.search_key)
				.then(res => res.json())
				.then(json => {
					this.setState({
						isLoaded: true,
						api_search: {
							query: json.query,
							rec_materials: json.rec_materials,
							metadata: json.metadata,
							showRecommendations: false,
							ShowNrOfSearches: true
						}
					});
				});
			console.log(this.state);
		}
	};

	ChangeSearchKey = value => {
		this.setState({
			search_key: value,
			showRecommendations: true
		});
	};
	CheckEnter = ele => {
		if (ele.key === 'Enter') {
			this.searchComponent();
		}
	};

	Recommendations = () => {
		if (this.state.search_key !== '' && this.state.showRecommendations) {
			return wordlist
				.filter(word => word.startsWith(this.state.search_key))
				.map(item => (
					<li>
						<button
							className="btn bg-transparent"
							onClick={this.AcceptRec.bind(this, item)}
						>
							{item}
						</button>
					</li>
				))
				.slice(0, 6);
		} else {
			return null;
		}
	};
	AcceptRec = name => {
		this.setState({ search_key: name, showRecommendations: false });
	};

	NrOfSearches = () => {
		if (this.state.ShowNrOfSearches === true)
			return (
				<p>
					Number of search results found:{' '}
					{this.state.api_search.metadata.num_or_materials} for{' '}
					{this.state.api_search.query.text}
				</p>
			);
		else {
			return null;
		}
	};
	SearchItem = item => {
		let sitem = item.item;
		if (sitem.description && sitem.description.length > 280) {
			sitem.description = sitem.description.substr(0, 280) + ' ...';
		}
		return (
			<li>
				<div className="jumbotron bg-transparent py-1 my-1">
					<a href={sitem.url} target="blank">
						<h4 className="searched">{sitem.title}</h4>
					</a>
					<span className="text-muted">
						<small>{sitem.url}</small>
					</span>
					<p>{sitem.description}</p>
				</div>
			</li>
		);
	};

	render() {
		return (
			<div className="container">
				<div className="text-center">
					<img
						src="https://www.x5gon.org/wp-content/themes/x5gon/dist/assets/img/logo.svg"
						alt="X5GON"
						className="my-5 img-fluid"
					/>
				</div>
				<input
					ref={input => input && input.focus()}
					type="text"
					value={this.state.search_key}
					id={'todoName' + this.props.id}
					onChange={e => this.ChangeSearchKey(e.target.value)}
					onKeyDown={this.CheckEnter}
					placeholder="Search for OER material"
					className="form-control align-middle mb-3"
					autoComplete="off"
				/>
				<button
					type="button"
					className="btn btn-outline-primary"
					onClick={this.searchComponent.bind(this)}
				>
					search
				</button>
				<ul className="recommendations">
					<this.Recommendations />
				</ul>
				<this.NrOfSearches />
				<ul className="searched-items">
					{this.state.api_search.rec_materials.map(item => (
						<this.SearchItem item={item} />
					))}
				</ul>
			</div>
		);
	}
}

export default App;
