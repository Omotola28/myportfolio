import _ from 'lodash';

export const handleError = (dispatch, error, type) => {
  const foundError = _.get(error, 'response.data.error') || { error };
  let actionType = type+'_FAILED';
  let errorMessage;
  if(foundError.error.response) {
    errorMessage = processStatus(foundError.error.response.status);
  } else {
    errorMessage = 'Facing some issue with server. Please try again later!'
  }
  return dispatch({
    type: actionType,
    payload: errorMessage
  });
};

const processStatus = (statusCode) => {
  switch (statusCode) {
    case 400:
      console.log("400");
      return 'Can not process bad request. Please try again later!';
    case 401:
      console("401");
      return 'You are not authorized to send request. Please try again later!';
    case 403:
      console.log("403");
      return 'Server is refusing your request now. Please try again later!';
    case 404:
      console.log("404");
      return 'Can not process your request now. Please try again later!';
    case 500:
      console.log("500");
      return 'Server is not responding. Please try again later!';
    default:
      console.log("welp");
      return 'Can not send your mail now. Please try again later!';
  }
};