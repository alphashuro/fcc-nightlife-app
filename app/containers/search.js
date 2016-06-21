import { connect } from 'react-redux';
import Search from '../components/search';
import { searchBarsNearMe, searchBarsNearLocation } from '../redux/actions';

export default connect(
	null,
	dispatch => ({
		handleSearchMyLocation: () => {
			navigator.geolocation.getCurrentPosition(({coords}) => {
				dispatch(searchBarsNearMe(coords));
			});
		},
		handleSearchPlace: place => {
			dispatch(searchBarsNearLocation(place));
		},
	})
)(Search);
