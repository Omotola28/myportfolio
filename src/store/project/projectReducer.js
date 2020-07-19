import initialState from '../../store/initialState';
import * as types from './projectTypes';
 

export function buttonData(state=initialState.buttonData, action) {
  switch(action.type) {
    case types.ADD_COUNT_ADVERTISEMENT: 
        return{
          ...state,
          ad: {
            counter: action.obj === undefined ? 0 : action.obj.count,
            data: action.obj
          }
        };
    case types.ADD_COUNT_PHOTOSYNTHESIS:
      return {
        ...state,
        photosynthesis: {
            counter: action.obj === undefined ? 0 : action.obj.count,
            data: action.obj
        }
      };
    default:
      return state
  }
}
