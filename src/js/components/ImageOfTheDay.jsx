import React from 'react';
import '../../css/ImageOfTheDay.css';

export default class ImageOfTheDay extends React.Component {
  componentDidMount() {
    this.getBingImageOfTheDay();
  }

  getBingImageOfTheDay() {
    // Utilizo a API do bing para buscar a imagem do dia
    fetch('/bing-api/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR')
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return <h1>Eu sou o bg!</h1>;
  }
}
