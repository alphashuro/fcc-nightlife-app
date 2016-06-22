import { connect } from 'react-redux';
import BarList from '../components/bar-list';
import { goingToBar, notGoingToBar, getBarsGoingTo } from '../redux/actions';

export default connect(
	state => {
		const barsGoingTo = state.barsGoingTo.items.map(bar => ({ ...bar, going: true }));
		const barsNotGoingTo = state.barsNearMe.items.filter(bar => barsGoingTo.some(b => b.id !== bar.id));
		const bars = [ ...barsGoingTo, ...barsNotGoingTo ];
		const withoutDuplicates = [];
		bars.forEach(bar => {
			if (withoutDuplicates.some(b => b.id === bar.id)) return;
			if (!bar.name) return;
			withoutDuplicates.push(bar);
		});
		return {
			bars: withoutDuplicates,
			loading: state.barsNearMe.loading,
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
