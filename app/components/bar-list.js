import React from 'react';

import styles from './bar-list.css';

const BarList = ({loading, bars, handleGoingToBar, handleNotGoingToBar}) => (
	<div>
		<h3 style={{ textAlign: 'center' }}>Bars</h3>
		{
			loading ? (
				<p>Loading</p>
				) : (
				<ul className={styles.list}> {
					bars.map(({id, name, going}) => <li className={styles.bar} key={id}>
						<p className={going ? styles.going : styles.notGoing}>{name}</p>
							<button onClick={ () =>  handleGoingToBar(id) } disabled={going}>Going</button>
					</li>)} 
				</ul>
			)}
	</div>
);

export default BarList;
