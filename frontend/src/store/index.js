import { combineReducers } from 'redux';

import allinfo from './allInfo';
import tags from './tags';
import sort from './sort';
import filter from './filter';

const FitBaseApp = combineReducers({
    allinfo,
    tags,
    sort,
    filter
  });
  
export default FitBaseApp;