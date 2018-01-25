import React from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup,
  Col,
  Button,
} from 'react-bootstrap';

const BootstrapButton = ({
  buttonText,
  handleClick,
}) => (
  <FormGroup>
    <Col smOffset={2} sm={10}>
      <Button
        onClick={(e) => handleClick(e)}
      >
        { buttonText }
      </Button>
    </Col>
  </FormGroup>
);

export default BootstrapButton;

BootstrapButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};