import React from 'react';
import PropTypes from 'prop-types';
import '../../css/InputCidade.css';

export default class InputCidade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputCidade: '',
      cidades: [],
    };

    this.handleChangeInputCidade = this.handleChangeInputCidade.bind(this);
  }

  handleChangeInputCidade(event) {
    this.setState({
      inputCidade: event.target.value,
    }, () => {
      this.buscarCidade();
    });
  }

  buscarCidade() {
    const { inputCidade } = this.state;
    fetch(`/maps-api/maps/api/place/autocomplete/json?key=AIzaSyCvdntP93tQjM5dpnGhWdJ8xvMcZKx7nqs&input=${inputCidade}&types=(cities)&language=pt_BR`)
      .then((res) => res.json())
      .then(
        (result) => {
          const cidadesResult = [];
          if (result.predictions.length <= 0) {
            this.setState({
              cidades: [],
            });
            return;
          }

          result.predictions.forEach((element) => {
            cidadesResult.push(element.description);
          });

          this.setState({
            cidades: cidadesResult,
          });
        },
      );
  }

  render() {
    const cidadesAnchorList = [];

    const { inputCidade, cidades } = this.state;

    cidades.forEach((value) => {
      cidadesAnchorList.push(<div className="dropdown-list-item" key={value}>{value}</div>);
    });

    return (
      <div className="dropdown-wrapper">
        <input type="text" value={inputCidade} onChange={this.handleChangeInputCidade} />
        <div className="dropdown-list">
          {cidadesAnchorList}
        </div>
      </div>
    );
  }
}

InputCidade.propTypes = {
};

InputCidade.defaultProps = {
};
