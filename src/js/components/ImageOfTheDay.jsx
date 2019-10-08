import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import '../../css/ImageOfTheDay.css';

export default class ImageOfTheDay extends React.Component {
  componentDidMount() {
    this.getBingImageOfTheDay();
  }

  getBingImageOfTheDay() {
    // Utilizo a API do bing para buscar a imagem do dia
    fetch('/bing-api/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR')
      .then((res) => res.json())
      .then(
        (result) => {
          const { setBingImageOfTheDay } = this.props;
          setBingImageOfTheDay(result.images[0].url);
        },
      );
  }

  render() {
    const { urlBingImageOfTheDay } = this.props;
    return (
      <Helmet>
        <style>{`body { background-image: url(/bing-api/${urlBingImageOfTheDay}); `}</style>
      </Helmet>
    );
  }
}

ImageOfTheDay.propTypes = {
  setBingImageOfTheDay: PropTypes.func.isRequired,
  urlBingImageOfTheDay: PropTypes.string,
};

ImageOfTheDay.defaultProps = {
  urlBingImageOfTheDay: '',
};