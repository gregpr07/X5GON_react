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
			showRecommendations: false
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
							showRecommendations: false
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
						<button onClick={this.AcceptRec.bind(this, item)}>{item}</button>
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

	SearchItem = item => {
		let sitem = item.item;
		if (sitem.description) {
			sitem.description = sitem.description.substr(0, 200) + ' ...';
		}
		return (
			<li>
				<h1>{sitem.title}</h1>
				<p>{sitem.description}</p>
			</li>
		);
	};

	render() {
		return (
			<div className="main">
				<input
					ref={input => input && input.focus()}
					type="text"
					value={this.state.search_key}
					id={'todoName' + this.props.id}
					onChange={e => this.ChangeSearchKey(e.target.value)}
					onKeyDown={this.CheckEnter}
				/>
				<button onClick={this.searchComponent.bind(this)}>press</button>
				<ul>
					<this.Recommendations />
				</ul>
				<p>
					Number of search results found:{' '}
					{this.state.api_search.metadata.num_or_materials} for{' '}
					{this.state.api_search.query.text}
				</p>
				<ul>
					{this.state.api_search.rec_materials.map(item => (
						<this.SearchItem item={item} />
					))}
				</ul>
			</div>
		);
	}
}

export default App;
