import { OPEN_MODAL, CLOSE_MODAL } from '../constants/ActionTypes';

const initialState = {
  isModalOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      return Object.assign({}, state, { isModalOpen: true });
    }
    case CLOSE_MODAL: {
      return Object.assign({}, state, { isModalOpen: false });
    }
    default: {
      return state;
    }
  }
}