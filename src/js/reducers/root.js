import { combineReducers } from 'redux';

import dashboard from '../screens/dashboard/dashboard.reducer';
import nav from './nav';
import session from '../screens/login/session.reducer';
import tasks from '../screens/tasks/tasks.reducer';

export default combineReducers({
  dashboard,
  nav,
  session,
  tasks
});
