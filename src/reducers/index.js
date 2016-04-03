/**
 * Created by stackia on 4/4/16.
 */
import {combineReducers} from 'redux';
import rotateFishNum from './rotateFishNum';
import roundTime from './roundTime';

export default combineReducers({
  rotateFishNum,
  roundTime
});
