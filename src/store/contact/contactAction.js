import * as types from './contactTypes'


export function emailSent(code) {
  return { type: types.SEND_MAIL_SUCCESS, code}
}

export function emailErrored(errCode) {
  return { type: types.SEND_MAIL_FAILED, errCode}
}

export function emailResetState() {
  return { type: types.SEND_MAIL_RESET}
}



/*const AUTH_ENDPOINT_BASE = '/api/v1/communicate';
const SEND_MAIL = 'SEND_MAIL';

export const sendMail = (message) => async (dispatch) => {
  try {
    const response = await post(dispatch, SEND_MAIL, `${AUTH_ENDPOINT_BASE}/mail`, message, false);
    alert(response);

  } catch (err) {
  	alert(err);
    await handleError(dispatch, err, SEND_MAIL);
  }
};*/