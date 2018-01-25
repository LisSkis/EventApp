import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import querystring from 'querystring';
import _ from 'lodash';
import {
  Grid,
  Row,
  Form,
} from 'react-bootstrap';

import * as ModalActions from '../../actions';

import BootstrapButton from '../components/BootstrapButton';
import BootstrapInput from '../components/BootstrapInput';
import BootstrapModal from '../components/BootstrapModal';

class AddEvent extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      eventDate: '',
      modalMessage: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  async onSubmit(e) {
    e.preventDefault();

    const { openModal } = this.props.actions;
    const eventBody = _.pick(this.state, ['firstName', 'lastName', 'email', 'eventDate']);

    try {
      const response = await axios.post('/', querystring.stringify(eventBody), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      });

      this.setState({
        firstName: '',
        lastName: '',
        email: '',
        eventDate: '',
        modalMessage: response.data.message,
      });
      openModal();
    } catch(e) {
      this.setState({
        modalMessage: e.response.data.message,
      });
      openModal();
    }
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      eventDate,
      modalMessage,
    } = this.state;

    const { isModalOpen } = this.props;
    const { closeModal } = this.props.actions;

    return (
      <Grid>
        <Row>
          <Form horizontal>
            <BootstrapInput
              label="First Name"
              value={firstName}
              inputName="firstName"
              inputType="text"
              handleChange={this.onChange}
            />
            <BootstrapInput
              label="Last Name"
              value={lastName}
              inputName="lastName"
              inputType="text"
              handleChange={this.onChange}
            />
            <BootstrapInput
              label="Email"
              value={email}
              inputName="email"
              inputType="email"
              handleChange={this.onChange}
            />
            <BootstrapInput
              label="Event Date"
              value={eventDate}
              inputName="eventDate"
              inputType="date"
              handleChange={this.onChange}
            />
            <BootstrapButton
              buttonText="Submit"
              handleClick={this.onSubmit}
            />
          </Form>
          { 
            isModalOpen &&
            <BootstrapModal
              modalMessage={modalMessage}
              buttonMessage="Close"
              handleClose={closeModal}
            />
          }
        </Row>
      </Grid>
    )
  }
}

AddEvent.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  isModalOpen: state.isModalOpen,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ModalActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddEvent);
