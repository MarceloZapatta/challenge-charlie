import React from 'react';
import PropTypes from 'prop-types';
import '../../css/Temperatura.css';
import InputCidade from './InputCidade';

export default class Temperatura extends React.Component {
  render() {
    return (
      <InputCidade />
      // <TemperaturaPrincipal :temperatura="" />
      // <TemperaturaSecundaria :temperatura="" />
      // <TemperaturaSecundaria :temperatura="" />
    );
  }
}

Temperatura.propTypes = {
};

Temperatura.defaultProps = {
};
