import React from 'react';

const BarList = ({loading, bars, handleGoingToBar, handleNotGoingToBar}) => (
	<div>
		<h3>Bars</h3>
		{
			loading ? (
				<p>Loading</p>
				) : (
				<ul> {
					bars.map(({id, name, going}) => <li>
						{name}
						{ going ? (
							<button onClick={ () => handleNotGoingToBar(id) }>Not Going</button>
						) : (
							<button onClick={ () =>  handleGoingToBar(id) }>Going</button>
						) }
					</li>)} 
				</ul>
			)}
	</div>
);

export default BarList;
