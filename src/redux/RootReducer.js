/**
 * @author Rahul Rajput
 * @email rahul@jigsaw.xyz
 * @create date 2020-05-06 09:56:00
 * @modify date 2020-05-06 09:56:00
 * @desc [All the combined reducers]
 */
import {combineReducers} from 'redux';
import dataReducer from './reducers/PersistedReducer';
import genericReducer from './reducers/GenericReducer';

const rootReducer = combineReducers({
  dataReducer,
  genericReducer
});

export default rootReducer;
