import { all } from 'redux-saga/effects';
import { watchEmployeeRegistration } from './saga.tsx';  // Assuming you have a separate saga for employee registration

// Combine all sagas here
export default function* rootSaga() {
  yield all([
    watchEmployeeRegistration(),  // Watch for the employee registration action
    // Add more sagas here as needed
  ]);
}