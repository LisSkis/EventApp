import React from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup,
  Col,
  ControlLabel,
  FormControl,
} from 'react-bootstrap';

const BootstrapInput = ({
  label,
  value,
  inputName,
  inputType,
  handleChange
}) => (
  <FormGroup controlId={`formHorizontal${inputName}`}>
    <Col componentClass={ControlLabel} sm={2}>
      {label}
    </Col>
    <Col sm={10}>
      <FormControl
        type={inputType}
        placeholder={label}
        name={inputName}
        value={value}
        onChange={handleChange}
      />
    </Col>
  </FormGroup>
);

export default BootstrapInput;

BootstrapInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
