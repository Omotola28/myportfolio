import axios from 'axios';
import { getApiUrl, getEnvironment } from './environment-util';
import * as types from './../contact/contactTypes'

const API_URL = getApiUrl();
const POST = 'post';
const httpRequest = async (dispatch, requestType = GET, opts = {}) => {
  try {
    dispatch({
      type: types.SEND_MAIL_REQUEST,
    });

    const reqArgs = [`${API_URL}/${opts.endpoint || ''}`];

    if (requestType === POST || requestType === PUT) {
      reqArgs.push(opts.data || {});
    }

    const response = await axios[requestType](...reqArgs);


    dispatch({
      type: types.SEND_MAIL_SUCCESS,
      payload: response.data,
    });
    return Promise.resolve(response.data);
  } catch (err) {
    throw err;
  }
};

export const post = (dispatch, type, endpoint, data, requiresAuth) =>
  httpRequest(dispatch, POST, type, { endpoint, data, requiresAuth });