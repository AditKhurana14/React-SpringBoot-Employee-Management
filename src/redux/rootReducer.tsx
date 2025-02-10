
import { combineReducers } from 'redux';
import employeeReducer from './reducer.tsx'; 

const rootReducer = combineReducers({
  employee: employeeReducer, 
});

export default rootReducer;
