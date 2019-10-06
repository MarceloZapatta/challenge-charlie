import { connect } from 'react-redux';
import { setBingImageOfTheDay } from '../actions';
import ImageOfTheDay from '../components/ImageOfTheDay';

const mapStateToProps = (state) => ({ urlBingImageOfTheDay: state.urlBingImageOfTheDay });

const mapDispatchToProps = (dispatch) => ({
  onComponentDidMount: (url) => dispatch(setBingImageOfTheDay(url)),
});

const BingImageOfTheDay = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImageOfTheDay);

export default BingImageOfTheDay;
