import React from 'react';
import './App.css';
import './css/bootstrap.css';
import ReactPaginate from 'react-paginate';

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
		// STATE
		this.state = {
			search_key: '',
			current_page: 1,
			previous_page: 0,
			previous_search: '',
			api_search: {
				query: {},
				rec_materials: [],
				metadata: { max_pages: 0 }
			},
			isLoaded: true,
			showRecommendations: false,
			IsSearching: false
		};
	}
	// FUNCTIONS
	searchComponent = () => {
		this.setState({
			previous_search: String(this.state.search_key),
			previous_page: parseInt(this.state.current_page)
		});
		if (
			this.state.search_key &&
			(this.state.search_key !== this.state.previous_search ||
				this.state.previous_page !== this.state.current_page)
		) {
			this.setState({
				isLoaded: false
			});
			fetch(
				site_api +
					'search?text=' +
					this.state.search_key +
					'&page=' +
					this.state.current_page
			)
				.then(res => res.json())
				.then(json => {
					this.setState({
						isLoaded: true,
						api_search: {
							query: json.query,
							rec_materials: json.rec_materials,
							metadata: json.metadata
						},
						showRecommendations: false,
						IsSearching: true
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
	AcceptRec = name => {
		this.setState({ search_key: name, showRecommendations: false });
	};
	ChangePage = data => {
		this.setState({ current_page: data.selected + 1 });
		this.searchComponent();
	};
	/* TO JE PLUGIN IZ https://www.npmjs.com/package/react-paginate */
	BottomPagination = () => {
		if (this.state.api_search.metadata.max_pages) {
			return (
				<ReactPaginate
					pageCount={this.state.api_search.metadata.max_pages}
					pageRangeDisplayed={5}
					marginPagesDisplayed={1}
					onPageChange={this.ChangePage}
					containerClassName={'pagination justify-content-center'}
					pageClassName={'page-item'}
					pageLinkClassName={'page-link'}
					activeClassName={'page-item active'}
					previousClassName={'page-item'}
					previousLinkClassName={'page-link'}
					nextClassName={'page-item'}
					nextLinkClassName={'page-link'}
					disabledClassName={'page-item disabled'}
				/>
			);
		} else {
			return null;
		}
	};

	// JSX ELEMENTS
	Recommendations = () => {
		if (this.state.search_key !== '' && this.state.showRecommendations) {
			return (
				<ul className="recommendations">
					{wordlist
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
						.slice(0, 6)}
				</ul>
			);
		} else {
			return null;
		}
	};
	NrOfSearches = () => {
		if (this.state.IsSearching === true)
			return (
				<p className="mt-2">
					Number of search results found:{' '}
					{this.state.api_search.metadata.num_or_materials} for{' '}
					<b>{this.state.api_search.query.text}</b> in{' '}
					{this.state.api_search.metadata.max_pages} pages \n current page{' '}
					{this.state.current_page}
				</p>
			);
		else {
			return null;
		}
	};
	SearchBar = () => {
		return (
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
		);
	};
	SearchButton = text => {
		return (
			<button
				type="button"
				className="btn btn-outline-primary px-4"
				onClick={this.searchComponent.bind(this)}
			>
				{text.text}
			</button>
		);
	};
	LogoIcon = () => {
		return (
			<img
				src="https://www.x5gon.org/wp-content/themes/x5gon/dist/assets/img/logo.svg"
				alt="X5GON"
				className="my-5 img-fluid"
			/>
		);
	};
	SearchItem = item => {
		let sitem = item;
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
	SearchItemsUL = item => {
		return (
			<ul className="searched-items">
				{this.state.api_search.rec_materials.map(item => this.SearchItem(item))}
			</ul>
		);
	};
	SpaceDIV = () => {
		if (this.state.IsSearching === false) {
			return <div id="spacing-div" />;
		} else {
			return null;
		}
	};
	LoadingIcon = () => {
		if (this.state.isLoaded === false) {
			return (
				<div>
					<img
						src="Ripple-1.4s-200px.gif"
						alt="loading-animation"
						height="50px"
						className="loading-icon"
					/>
				</div>
			);
		} else {
			return null;
		}
	};

	// OTHER

	// RENDER VIEW
	render() {
		return (
			<React.Fragment>
				<this.SpaceDIV />
				<div className="container">
					<div className="text-center" id="search">
						<this.LogoIcon />
						<this.SearchBar />
						<this.SearchButton text={'Search'} />
						<this.LoadingIcon />
					</div>
					<this.Recommendations />
					<this.NrOfSearches />
					<this.SearchItemsUL />
					<this.BottomPagination />
				</div>
			</React.Fragment>
		);
	}
}

export default App;
