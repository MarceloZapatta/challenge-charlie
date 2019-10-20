import { connect } from 'react-redux';
import { setBingImageOfTheDay } from '../actions';
import BingImageOfTheDay from '../components/BingImageOfTheDay';

const mapStateToProps = (state) => ({ urlBingImageOfTheDay: state.urlBingImageOfTheDay });

const mapDispatchToProps = (dispatch) => ({
  setBingImageOfTheDay: (url) => dispatch(setBingImageOfTheDay(url)),
});

const BingImageOfTheDayContract = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BingImageOfTheDay);

export default BingImageOfTheDayContract;
