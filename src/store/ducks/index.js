import { combineReducers } from 'redux';

import feed from './feed/reducer';
import settings from './settings/reducer';

export default combineReducers({
  feed,
  settings,
});
