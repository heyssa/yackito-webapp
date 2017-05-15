import { DASHBOARD_LOAD, DASHBOARD_UNLOAD } from '../../constants/action.constants';
import { createReducer } from '../../reducers/utils';

const initialState = {
  tasks: []
};

const handlers = {
  [DASHBOARD_LOAD]: (state, action) => {
    if (!action.error) {
      action.payload.error = undefined;
      return action.payload;
    }
    return { error: action.payload };
  },
  [DASHBOARD_UNLOAD]: () => initialState
};

export default createReducer(initialState, handlers);
