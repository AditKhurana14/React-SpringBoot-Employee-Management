
import { takeEvery, call, put } from 'redux-saga/effects';

import { EMPLOYEE_REGISTER_REQUEST, EMPLOYEE_REGISTER_SUCCESS, EMPLOYEE_REGISTER_FAILURE, GET_EMPLOYEE_REQUEST, GET_EMPLOYEE_SUCCESS, GET_EMPLOYEE_FAILURE, DELETE_EMPLOYEE_REQUEST, DELETE_EMPLOYEE_SUCCESS, DELETE_EMPLOYEE_FAILURE, GET_SINGLE_EMPLOYEE, GET_SINGLE_EMPLOYEE_SUCCESS, GET_SINGLE_EMPLOYEE_FAILURE } from '../redux/constants.tsx';
import { deleteEmployeeData, getEmployeeData, getSingleEmployee, registerEmployeeAPI } from './api.tsx';
import { showSuccessToast } from "../util/toastUtil";


function* registerEmployeeSaga(action) {
  try {
    const employeeData = yield call( registerEmployeeAPI,action.payload);  // API call
    yield put({ type: EMPLOYEE_REGISTER_SUCCESS, payload: employeeData });
    showSuccessToast("New Employee Added");

  } catch (error) {
    yield put({ type: EMPLOYEE_REGISTER_FAILURE, payload: error.message });
  }
}

function* getEmployeeSaga(action) {
  try {
    const employeeGetData = yield call( getEmployeeData);  // API call
    yield put({ type:  GET_EMPLOYEE_SUCCESS, payload: employeeGetData });
    // showSuccessToast("New Employee Added");S

  } catch (error) {
    yield put({ type: GET_EMPLOYEE_FAILURE, payload: error.message });
  }
}

function* DeleteEmployee(action) {
  try {
    console.log("Deleting Employee with ID:", action.payload);
    
    const employeeDeleteData = yield call(deleteEmployeeData, action.payload);
    console.log("API Response in Saga:", employeeDeleteData); // Check if it's undefined

    if (!employeeDeleteData) {
      throw new Error("API returned undefined");
    }
    
   

    yield put({ type: DELETE_EMPLOYEE_SUCCESS, payload: employeeDeleteData });
  } catch (error) {
    console.error("Delete Employee Error:", error.message);
    yield put({ type: DELETE_EMPLOYEE_FAILURE, payload: error.message });
  }
}

function* GetSingleEmployee(action) {
  try {
    const employeeSingleData = yield call( getSingleEmployee,action.payload);  // API call

    yield put({ type:  GET_SINGLE_EMPLOYEE_SUCCESS, payload: employeeSingleData });

  } catch (error) {
    yield put({ type: GET_SINGLE_EMPLOYEE_FAILURE, payload: error.message });
  }
}





// Watcher Saga: Watches for employee registration request action
export function* watchEmployeeRegistration() {
  yield takeEvery(EMPLOYEE_REGISTER_REQUEST, registerEmployeeSaga);
  yield takeEvery(GET_EMPLOYEE_REQUEST, getEmployeeSaga);
  yield takeEvery(DELETE_EMPLOYEE_REQUEST, DeleteEmployee);
  yield takeEvery(GET_SINGLE_EMPLOYEE, GetSingleEmployee);





}
