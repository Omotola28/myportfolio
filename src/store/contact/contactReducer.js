import initialState from '../../store/initialState';
import * as types from './contactTypes';

 

export default function contactReducer(state=initialState.contact, action) {
  switch(action.type) {
    case types.SEND_MAIL_RESET:
      return {
        ...state,
        statusCode: ''
      };
    case types.SEND_MAIL_SUCCESS:
      return {
        ...state,
        statusCode: action.code
      };
    case types.SEND_MAIL_FAILED:
      return {
        ...state,
        statusCode: action.errCode
        };
    default:
      return state
  }
}
