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


