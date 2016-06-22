import React from 'react';

const BarList = ({loading, bars, handleGoingToBar, handleNotGoingToBar}) => (
	<div>
		<h3>Bars</h3>
		{
			loading ? (
				<p>Loading</p>
				) : (
				<ul> {
					bars.map(({id, name, going}) => <li key={id}>
						{name}
							<button onClick={ () =>  handleGoingToBar(id) } disabled={going}>Going</button>
					</li>)} 
				</ul>
			)}
	</div>
);

export default BarList;
