/**
 * @author Rahul Rajput
 * @email rahul@jigsaw.xyz
 * @create date 2020-05-18 16:45:54
 * @modify date 2020-05-18 16:45:54
 * @desc [Non persisting reducers]
 */

import { DISPLAY_LOADER, MESSAGE_POPUP, AUTH_FLOW, CLEAR_DATA, DISPLAY_NOTIFICATION, NEW_NOTIFICATION
} from '../Actions';

const initialState = {
  _showMessagePopUp: false,
  _heading: '',
  _message: '',
  _authFlow: 'login',
  _notification: [],
  _newNotification: false
};

const genericReducer = (state = initialState, action) => {
    switch (action.type) {
        case MESSAGE_POPUP: {
          const newState = Object.assign({}, state, {
            _showMessagePopup: action.data.visibility,
            _heading: action.data.heading,
            _message: action.data.message,
          });
          return newState;
        }
        case DISPLAY_LOADER: {
          const newState = Object.assign({}, state, { _showLoader: action.data });
          return newState;
        }
        case CLEAR_DATA: {
          return initialState;
        }
        default:
          return state;
      }
}

export default genericReducer;
