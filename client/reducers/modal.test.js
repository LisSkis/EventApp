import expect from 'expect';

import modal from './modal';
import * as types from '../constants/ActionTypes';

describe('modal reducer', () => {
  it ('should handle initial state', () => {
    expect(
      modal(undefined, {}).isModalOpen
    ).toBe(false);
  });

  it ('should open modal', () => {
    expect(
      modal({
        isModalOpen: false,
      }, {
        type: types.OPEN_MODAL,
      }).isModalOpen
    ).toBe(true);
  });

  it ('should close modal', () => {
    expect(
      modal({
        isModalOpen: true,
      }, {
        type: types.CLOSE_MODAL,
      }).isModalOpen
    ).toBe(false);
  });
});