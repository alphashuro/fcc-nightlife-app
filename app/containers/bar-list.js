import { connect } from 'react-redux';
import BarList from '../components/bar-list';
import { goingToBar, notGoingToBar, getBarsGoingTo } from '../redux/actions';

export default connect(
	({auth: { token }, barsNearMe: { items, loading }, barsGoingTo}) => {
		const bars = items.map(({id, name}) => ({
			id,
			name,
			going: !!token && barsGoingTo.items.some(bar => bar.id === id),
		}));
		return {
			bars,
			loading,
		};
	},
	dispatch => ({
		handleGoingToBar: id => {
			dispatch(goingToBar(id));
		},
		handleNotGoingToBar: id => {
			dispatch(notGoingToBar(id));
		},
	})
)(BarList);
