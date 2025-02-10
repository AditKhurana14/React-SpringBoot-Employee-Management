import {
  DELETE_EMPLOYEE_FAILURE,
  DELETE_EMPLOYEE_REQUEST,
  DELETE_EMPLOYEE_SUCCESS,
  EMPLOYEE_REGISTER_FAILURE,
  EMPLOYEE_REGISTER_REQUEST,
  EMPLOYEE_REGISTER_SUCCESS,
  EMPLOYEE_REGISTER_SUCCESS_MSG_REMOVE,
  GET_EMPLOYEE_FAILURE,
  GET_EMPLOYEE_REQUEST,
  GET_EMPLOYEE_SUCCESS,
  SEARCH_EMPLOYEE,
} from "./constants.tsx";

// {*********************************Register User**************************************************}

export const registerEmployeeRequest = (data) => ({
  type: EMPLOYEE_REGISTER_REQUEST,
  payload: data,

  
});

export const registerEmployeeSuccess = (employeeData) => ({
  type: EMPLOYEE_REGISTER_SUCCESS,
  payload: employeeData,
});

export const registerEmployeeFailure = (error) => ({
  type: EMPLOYEE_REGISTER_FAILURE,
  payload: error,
});



// {*****************Get Employees******************************************************************************}

export const getEmployeeRequest = () => ({
  type: GET_EMPLOYEE_REQUEST,
});

export const getEmployeeSuccess = (employees: any) => ({
  type: GET_EMPLOYEE_SUCCESS,
  payload: employees,
});

export const getEmployeeFailure = (error: string) => ({
  type: GET_EMPLOYEE_FAILURE,
  payload: error,
});


// {*****************************SearchEmployee************************************************}

export const searchEmployee = (data) => ({
  type: SEARCH_EMPLOYEE,
  payload: data,
});

export const setEmployeeRegisterSuccessMsg = () => ({
  type: EMPLOYEE_REGISTER_SUCCESS_MSG_REMOVE,
});


// {**********************************Delete Employee******************************************************}

export const deleteEmployeeRequest = (id) => ({
  type: DELETE_EMPLOYEE_REQUEST,
  payload: id,
});

export const deleteEmployeeSuccess = (data) => ({
  type: DELETE_EMPLOYEE_SUCCESS,
  payload: data,
});

export const deleteEmployeeFailure = (error) => ({
  type: DELETE_EMPLOYEE_FAILURE,
  payload: error,
});


