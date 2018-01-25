import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

const BootstrapModal = ({
  modalMessage,
  buttonMessage,
  handleClose,
}) => (
  <Modal.Dialog>
    <Modal.Header>
      <Modal.Title>{modalMessage}</Modal.Title>
    </Modal.Header>

    <Modal.Footer>
      <Button onClick={() => handleClose()}>
        {buttonMessage}
      </Button>
    </Modal.Footer>
  </Modal.Dialog>
);

export default BootstrapModal;

BootstrapModal.propTypes = {
  modalMessage: PropTypes.string.isRequired,
  buttonMessage: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};