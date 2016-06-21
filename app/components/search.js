import React from 'react';

const Search = React.createClass({
	render() {
		const { handleSearchMyLocation, handleSearchPlace } = this.props;
		return (
			<div>
				<input type="text" placeholder="Enter a place" ref={node => this.input = node}/>
				<button onClick={ () => handleSearchPlace(this.input.value) }>Search</button>
				<button onClick={ () => handleSearchMyLocation() }>Use my location</button>
			</div>
		);
	}
});

export default Search;
